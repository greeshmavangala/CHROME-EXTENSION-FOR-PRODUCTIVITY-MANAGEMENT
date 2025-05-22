const express = require('express');
const router = express.Router();
const Blocklist = require('../models/blocklist');


router.post('/', async (req, res) => {
  const { userId, sites } = req.body;
  if (!userId || !Array.isArray(sites)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  await Blocklist.findOneAndUpdate(
    { userId },
    { sites },
    { upsert: true }
  );

  res.json({ message: 'Blocklist updated' });
});

router.get('/:userId', async (req, res) => {
  const block = await Blocklist.findOne({ userId: req.params.userId });
  res.json(block?.sites || []);
});

module.exports = router;
