// backend/routes/fundraisers.js
const express = require('express');
const Fundraiser = require('../models/Fundraiser');
const auth = require('../middleware/auth');

const router = express.Router();

// Protected: Create fundraiser
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, goalAmount } = req.body;

    const fundraiser = new Fundraiser({
      title,
      description,
      goalAmount,
      creator: req.user.userId,
    });

    await fundraiser.save();
    res.status(201).json(fundraiser);
  } catch (error) {
    console.error('Create fundraiser error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Public: Get all fundraisers
router.get('/', async (req, res) => {
  const fundraisers = await Fundraiser.find();
  res.json(fundraisers);
});

module.exports = router;
