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
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status);
    res.send(`
            <div>
                <h1> Ops! Sorry, There is a problem!</h1> 
                <i>(${err.status} - ${err.message})</i>
                <p> You can learn about this kind of error here: <a href="https://teamtreehouse.com/library/error-handling-middleware">Error Handling Middleware</a></p>
                <br>
                <pre>${err.stack}</pre>
            </div>
            `);
})

// Setup a development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});