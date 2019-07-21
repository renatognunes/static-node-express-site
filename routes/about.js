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
 * Route serving /about
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @param {express.resquest}
 * @param {express.response}
 * @return rendered template
 */
router.get('/about', (req, res) => {
    res.render('about');
})


/**
 * Route /about
 * @module about
 */
module.exports = router;