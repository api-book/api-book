const MenuController = require("../../controllers/setting/menu");
const Joi = require("joi");

module.exports = [
    {
        method: "GET",
        path: "/menu",
        handler: async (request, h) => {
            return await MenuController.listMenu(request,h);
        },
        options: {
            tags: ["api", "Menu"],
            description: "获取导航列表",
        },
    },
]
