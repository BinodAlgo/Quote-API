const express = require('express');

const router = express.Router();
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

// GET call to list a random quote
router.get("/random",(req,res,next)=>{
  const quote = getRandomElement(quotes);
  res.json({quote})
})

// GET call to list quotes or by specific person
router.get("/",(req,res,next)=>{
  const person = req.query.person;
  if(!person){
    res.json({quotes});
  }
  else{
    const filteredQuotes = quotes.filter((quote)=> quote.person === person)
    res.json({quotes:filteredQuotes})
  }
})

// POST call to create a new quote
router.post("/",(req,res,next)=>{
 
  const {quote,person} = req.query;
  // console.log(date);
  if(quote && person){
    quotes.push({...req.query, date: new Date().toISOString().split("T")[0]});

    res.status(201).json({quote:{...req.query}})
  }
  else{
    res.status(400).send();
  }
 

})

// Updating the quote with specified id
router.put("/:id",(req,res,next)=>{
  const {id} = req.params;
  const {quote,person} = req.body
  // console.log(quote,person)
  const index = quotes.findIndex(quote => quote.id === Number(id))
  if(index !== -1){
    quotes[index] = {id:Number(id),quote,person };
    quotes[index].date = new Date().toISOString().split("T")[0];
    res.json({quote:quotes[index]})
  }
  else{
    res.status(404).send({found:false})
  }
})

// Deleting the quote with specified id
router.delete("/:id",(req,res,next)=>{
  // logic for deleting the quote
  const {id} = req.params;
  const index = quotes.findIndex(q => q.id === Number(id));
  if(index === -1){
    res.status(404).send();
  }
  else{
    const deletedQuote = quotes.splice(index, 1);
    res.json({quote: deletedQuote[0]})
  }
})







module.exports = router;