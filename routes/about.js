// Require Express Web Framework
const express = require('express');

// A router constructor is kind of like a mini app in Express. 
// You can add middleware and routes to it.
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about');
})

// Export this router so I can reference it in the app.js file
module.exports = router;