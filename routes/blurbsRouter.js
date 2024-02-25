const express = require('express');

const router = express.Router();
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

const { v4: uuidv4 } = require('uuid');


let blurbs = [
  { id: uuidv4(), name: 'Albert Einstein', blurb: 'Physicist who developed the theory of relativity.' },
  { id: uuidv4(), name: 'Marie Curie', blurb: 'Physicist and chemist who conducted pioneering research on radioactivity.' },
  // Add more blurbs as needed
];

router.get('/', (req, res) => {
  res.json(blurbs);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const blurb = blurbs.find(b => b.id === id);
  if (blurb) {
    res.json(blurb);
  } else {
    res.status(404).send();
  }
});

router.post('/', (req, res) => {
  const { name, blurb } = req.body;
  const newBlurb = { id: uuidv4(), name, blurb };
  blurbs.push(newBlurb);
  res.json({ blurb: newBlurb });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, blurb } = req.body;

  const index = blurbs.findIndex(b => b.id === id);
  if (index === -1) {
    res.status(404).send("No blurb found");
  } else {
    blurbs[index] = { id, name, blurb };
    res.json({ blurb: blurbs[index] });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = blurbs.findIndex(b => b.id === id);
  if (index === -1) {
    res.status(404).send();
  } else {
    const deletedBlurb = blurbs.splice(index, 1);
    res.json({ blurb: deletedBlurb });
  }
});

module.exports = router;

module.exports = router;