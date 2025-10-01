require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerSetup = require('./config/swagger');
const limiterMiddleware = require('./middlewares/rateLimiter.middleware');

// Import routes
const mainRoutes = require('./routes/main.routes');
const cornRoutes = require('./routes/corn.routes');

// Import error handlers middlewares
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandlers.middleware');

// Function that creates and configures the app
function createApp() {
  const app = express();

  // Basic middlewares
  app.use(cors());
  app.use(express.json());
  app.use(morgan('short'));

  // Routes
  app.use('/', mainRoutes);
  app.use('/api/corn', limiterMiddleware, cornRoutes);

  // Swagger
  swaggerSetup(app);

  // Error middlewares at the end of all routes
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
