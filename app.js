/**
 * Express Web Framework module
 * @module Express
 * @requires express
 */
const express = require('express');

/** 
 * @function
 * The express function returns an Express application 
 */
const app = express();

/**
 * Static route middleware.
 * @function
 * @param {string} path - /static/
 * @param {callback} middleware - Express middleware.
 */
app.use('/static', express.static('public'));


// Import routes from routes folder.

/**
 * Index module
 * @module routes/index
 */
const mainRoutes = require('./routes');
/**
 * About module
 * @module routes/about
 */
const aboutRoutes = require('./routes/about');
/**
 * Project module
 * @module routes/project
 */
const projectRoutes = require('./routes/project');

/**  
 * Mounts middleware to /index route
 * @function
 * @param {callback} route /index
 */
app.use(mainRoutes);
/**  
 * Mounts middleware to /about route
 * @function
 * @param {callback} route /about
 */
app.use(aboutRoutes);
/**  
 * Mounts middleware to /project route
 * @function
 * @param {callback} route /project
 */
app.use(projectRoutes);


/** Assigns setting template engine 
 * @function
 * @param {string} name view engine
 * @param {string} value pug 
 */
app.set('view engine', 'pug');


/**
 * Handle 404 error
 * @module Express
 * @function
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 * @return {Object} - Error Object
 */
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log('Ops! Sorry, There is a problem! - Learn more: https://teamtreehouse.com/library/error-handling-middleware', err);
    next(err);
});


/**
 * Error Handling Middleware
 * @module Express
 * @function
 * @param {Object} err - Error Object
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 * @inner
 * @method render
 * @param {string} path template
 */
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})


/**
 * Setup a development server
 * @module Express
 * @function
 * @param {number} port
 * @param {callback} console.log string
 */
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});