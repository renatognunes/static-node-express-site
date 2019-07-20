// Require Express Web Framework
const express = require('express');

// The express function returns an Express application
const app = express();

// Add static MiddleWare
app.use('/static', express.static('public'));

// Import route from routes folder
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

// Use the routes to make a middleware
app.use(mainRoutes);
app.use(aboutRoutes);
app.use(projectRoutes);

// Define which template engine to use
app.set('view engine', 'pug');

// Handle 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log('Ops! Sorry, There is a problem! - Learn more: https://teamtreehouse.com/library/error-handling-middleware', err);
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

// Setup a development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});