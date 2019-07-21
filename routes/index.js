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
const projects = require('../data/projectsData.json');


/**
 * Route serving /index
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @param {express.resquest}
 * @param {express.response}
 * @param {Object} projects JSON data
 * @return rendered template
 */
router.get('/', (req, res) => {
    res.render('index', projects);
});


/**
 * Route /about
 * @module about
 */
module.exports = router;