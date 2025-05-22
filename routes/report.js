const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

router.post('/', async (req, res) => {
  try {
    const { site, duration, userId } = req.body;
    const report = new Report({ site, duration, userId });
    await report.save();
    res.status(200).json({ message: 'Report saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.params.userId });
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
