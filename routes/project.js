// Require Express Web Framework
const express = require('express');

// A router constructor is kind of like a mini app in Express. 
// You can add middleware and routes to it.
const router = express.Router();

// Require flat data 
const { projects } = require('../data/projectsData.json');

router.get('/project', (req, res) => {
    // Redirect to a project/id later
    res.render('project')
})

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id]
    res.render('project', project);
})

// Export this router so I can reference it in the app.js file
module.exports = router;