const DataController = require("../../controllers/data/index");
const Joi = require("joi");

module.exports = [
    {
        method: "GET",
        path: "/data/{book}",
        handler: async (request, h) => {
            return await DataController.getBook(request);
        },
        options: {
            validate: {
                params: {
                    id: Joi.string().required(),
                },
            },
            tags: ["api", "Data"],
            description: "获取指定笔记本内容",
        },
    },
]
