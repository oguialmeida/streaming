const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.find().populate('history.content');
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('history.content');
  res.json(user);
});

module.exports = router;
