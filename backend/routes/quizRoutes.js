const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Test route
router.get('/test', (req, res) => {
  res.send('Quiz API working!');
});

// Add a new question
router.post('/', async (req, res) => {
  try {
    //console.log("recieved:", req.body);
    
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get questions with optional category filter
// Get questions with optional category filter
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;

    let questions;
    if (category && category !== 'All') {
      questions = await Question.find({ category });
    } else {
      questions = await Question.find();
    }

    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
