// Load All Routes
const load = require("require-directory");
const routeModules = load(module);
const { buildFlatArray } = require("../utils/common");
const routes = buildFlatArray(routeModules);

// Route Options
const routeConf = require("../config/route");
module.exports = {
    name: "router",
    version: "1.0.0",
    register: function (server, options) {
        server.route(
            routes.map((route) => {
                route.options.cors = routeConf.cors;
                return route;
            })
        );
    },
};
