const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/criarTicket', (req,res) => {
    res.render('registerTicket/registerTicket')
})

module.exports = router;