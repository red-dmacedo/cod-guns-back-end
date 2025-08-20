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

});

router.delete('/:gunId', async (req, res) => { // Delete specific gun
    try {
      const { id } = req.params;
      if (!id) {
        return res.sendStatus(423);
      }
      const gun = await Gun.findById(id);
      if (!gun) {
        return res.sendStatus(404);
      }
      await Gun.findByIdAndDelete(id);
      return res.status(200).json(gun);
    } catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  });


module.exports = router;