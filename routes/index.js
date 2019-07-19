// Require Express Web Framework
const express = require('express');

// A router constructor is kind of like a mini app in Express. 
// You can add middleware and routes to it.
const router = express.Router();

// Require flat data 
const { projects } = require('../data/projectsData.json');

router.get('/', (req, res) => {
    const projectData = projects
    res.render('index', projectData);
})

// Export this router so I can reference it in the app.js file
module.exports = router;