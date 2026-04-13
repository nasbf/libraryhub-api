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
        url: 'https://libraryhub-api.onrender.com'
      }
    ]
  },
  apis: ['./routes/*.js'] // this MUST match your structure
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;