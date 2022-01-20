const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/tickets', (req,res) => {
    res.render('tickets/tickets');
})

module.exports = router;