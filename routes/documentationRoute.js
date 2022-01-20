const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/docs', (req,res) => {
    res.render('docs/docs')
})

module.exports = router;