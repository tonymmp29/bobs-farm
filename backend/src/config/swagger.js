const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Bobs-Corn',
      version: '1.0.0',
      description: 'API Documentation for Bobs-Corn Application',
      contact: {
        name: 'API Support',
        email: 'support@bobs-corn.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  // Paths to files containing Swagger annotations
  apis: ['./src/routes/*.js'],
};

// Function to configure Swagger in Express application
const swaggerSetup = (app) => {
  const specs = swaggerJsdoc(swaggerOptions);
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
};

module.exports = swaggerSetup;