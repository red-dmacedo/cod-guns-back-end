const express = require('express');
const router = express.Router();
const Gun = require('../models/gun');

router.get('/', async (req, res) => { // Get all guns
  try {
    const guns = await Gun.find();
    if(!guns) throw new Error('No guns found');
    res.status(200).json(guns);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

router.post('/', async (req, res) => { // Create a gun
  try {
    const createdGun = await Gun.create(req.body);
    res.status(201).json(createdGun);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.put('/:gunId', async (req, res) => { // Update specific gun
  try {
    const gun = await Gun.findById(req.params.gunId);

    if (!gun) {
      return res.status(403).send('You\'re not allowed to do that!');
    }

    const updatedGun = await Gun.findByIdAndUpdate(
      req.params.gunId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedGun);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.get('/:gunId', async (req, res) => { // Get specific gun
  try {
    const gun = await Gun.findById(req.params.gunId);
    if (!gun) { throw new Error("Gun not found") };
    return res.status(200).json(gun);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  };
});

router.delete('/:gunId', async (req, res) => { // Delete specific gun
  try {
    const { gunId } = req.params;
    if (!gunId) {
      return res.sendStatus(423);
    }
    const gun = await Gun.findById(gunId);
    if (!gun) {
      return res.sendStatus(404);
    }
    await Gun.findByIdAndDelete(gunId);
    return res.status(200).json(gun);
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
});


module.exports = router;