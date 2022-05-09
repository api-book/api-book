const NavController = require("../../controllers/setting/nav");
const Joi = require("joi");

module.exports = [
    {
        method: "GET",
        path: "/nav",
        handler: async (request, h) => {
            return await NavController.listNavigation(request,h);
        },
        options: {
            tags: ["api", "Nav"],
            description: "获取导航列表",
        },
    },
]
