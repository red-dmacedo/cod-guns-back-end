const express = require('express');
const router = express.Router();
const Gun = require('../models/gun');

router.get('/', async (req, res) => { // Get all guns

});

router.post('/', async (req, res) => { // Create a gun

});

router.put('/:gunId', async (req, res) => { // Update specific gun
    try {
    const updatedGun = await Gun.findByIdAndUpdate(req.params.GunId, req.body, { new: true });
    if (!updatedGun) {
      res.status(404);
      throw new Error('Gun not found.');
    }
    res.status(200).json(updatedGun);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});

router.get('/:gunId', async (req, res) => { // Get specific gun

});

router.delete('/:gunId', async (req, res) => { // Delete specific gun

});

module.exports = router;