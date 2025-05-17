const express = require('express');
const User = require('../controllers/user.js');

const router = express.Router();

router.post('/user/signin', User);
router.get('/user/signin', (req, res) => {
    res.render('signin', {});
});

module.exports = router;