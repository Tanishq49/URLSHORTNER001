const express = require('express');
const handleLogin = require('../controllers/login.js');

const router = express.Router();

router.post('/user/login', handleLogin);
router.get('/user/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

module.exports = router

