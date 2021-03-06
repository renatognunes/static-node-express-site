/**
 * Express Web Framework module
 * @module Express
 * @requires express
 */
const express = require('express');

/**
 * Express router to mounts the router module on a path in the main app.
 * @type {object}
 */
const router = express.Router();

/**
 * Require json data from a flat data file
 * @requires JSON data
 * @param {string} json data
 */
const { projects } = require('../data/projectsData.json');


/**
 * Route serving /project
 * @function
 * @inner
 * @param {string} path - Express route path
 * @param {callback} middleware - Express middleware
 * @param {express.resquest}
 * @param {express.response}
 * @method redirect route
 */
router.get('/project', (req, res) => {
    res.redirect('project/0/')
});


/**
 * Route serving /project/id
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @param {express.resquest {request.params : string}}
 * @param {express.response}
 * @param {function} next - Next middleware function
 * @param {Object} projects JSON data
 * @return {undefined}
 */
router.get('/project/:id', (req, res, next) => {
    const { id } = req.params;
    if (id < projects.length) {
        const project = projects[id]
        return res.render('project', project);
    } else {
        next();
    }
});


/**
 * Route /project
 * @module project
 */
module.exports = router;