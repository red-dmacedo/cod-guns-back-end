const express = require('express');
const router = express.Router();
const Gun = require('../models/gun');

router.get('/', async (req, res) => { // Get all guns

});

router.post('/', async (req, res) => { // Create a gun

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
} catch(err) {
    res.status(500).json({ err: err.message });
}
});

router.get('/:gunId', async (req, res) => { // Get specific gun

});

router.delete('/:gunId', async (req, res) => { // Delete specific gun

});

module.exports = router;