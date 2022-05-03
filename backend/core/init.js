// Driver
const Hapi = require("@hapi/hapi");
const Joi = require("joi");
const config = require("../config");
const plugins = require("../plugins");
const router = require("../routes");

const init = async () => {
    // Instance
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: "localhost",
        state: {
            strictHeader: false,
            ignoreErrors: true,
        },
    });

    // Validator
    server.validator(Joi);

    // Load Plugins
    await server.register(plugins);

    // Register Routes
    await server.register(router, {
        routes: config.route.options,
    });

    // Starter
    await server.start();
    console.log("Server running on %s", server.info.uri);
    console.log("Document on %s", server.info.uri + "/documentation");
};

process.on("unhandledRejection", (err) => {
    console.error(err);
    process.exit(1);
});

module.exports = init;
