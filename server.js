const express = require('express');
const app = express();


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
// Middle to parse json bodies
app.use(express.json())
// Middle to parse form urlencoded  data
app.use(express.urlencoded({extended:true}))

// Mount the quoteRouter
const quoteRouter = require("./routes/quotesRouter.js");
// Mount the blurbRouter
app.use("/api/quotes",quoteRouter);
const blurbsRouter = require('./routes/blurbsRouter.js');
app.use("/api/blurbs",blurbsRouter);

app.listen(PORT,()=>{
  console.log("Server is running at localhost:"+PORT);
})

