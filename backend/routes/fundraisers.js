const express = require('express');
const router = express.Router();
const Fundraiser = require('../models/Fundraiser');

// POST - Create a new fundraiser
router.post('/', async (req, res) => {
  try {
    const fundraiser = new Fundraiser(req.body);
    await fundraiser.save();
    res.status(201).json(fundraiser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Get all fundraisers
router.get('/', async (req, res) => {
  try {
    const fundraisers = await Fundraiser.find();
    res.json(fundraisers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
