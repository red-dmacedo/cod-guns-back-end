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

});

module.exports = router;