const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LibraryHub API',
      version: '1.0.0',
      description: 'Library API for users and reservations'
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:8080'
      }
    ]
  },
  apis: ['./routes/*.js'] // this MUST match your structure
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;