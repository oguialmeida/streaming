const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

router.get('/', async (req, res) => {
  const contents = await Content.find().populate('actors');
  res.json(contents);
});

router.get('/actor/:actorId', async (req, res) => {
  const contents = await Content.find({ actors: req.params.actorId }).populate('actors');
  res.json(contents);
});

module.exports = router;
