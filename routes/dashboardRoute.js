const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', (req,res) => {
    res.render('home/dashboard');
})

module.exports = router;