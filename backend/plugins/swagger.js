// Hapi Swagger
// Docs: https://www.npmjs.com/package/hapi-swagger

const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiSwagger = require("hapi-swagger");
const swaggerOptions = require('../config/swagger');

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options: swaggerOptions,
    },
];
