const express = require('express');
const handleGenerateUrl = require('../controllers/url.js');

const router = express.Router();

router.post('/generate', handleGenerateUrl);

router.get('/generate', (req, res) => {
    res.render('shortner');
});

module.exports = router;