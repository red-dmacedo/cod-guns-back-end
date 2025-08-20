const express = require('express');
const router = express.Router();
const Gun = require('../models/gun');

router.get('/', async (req, res) => { // Get all guns

});

router.post('/', async (req, res) => { // Create a gun

});

router.put('/:gunId', async (req, res) => { // Update specific gun

});

router.get('/:gunId', async (req, res) => { // Get specific gun
  try {
    const gun = await Gun.findById(req.params.id);
    if (!gun) { throw new Error("Gun not found") };
    return res.status(200).json(gun);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  };
});

router.delete('/:gunId', async (req, res) => { // Delete specific gun

});

module.exports = router;