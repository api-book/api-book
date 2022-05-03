// Config Swagger Plugin
// Make the api doc group by tags

const { version } = require("../package.json");
module.exports = {
    info: {
        title: "接口文档",
        version: version,
    },
    grouping: "tags",
    tags: [

        { name: "Setting", description: "设置" },
        { name: "Data", description: "数据" },

    ],
};
