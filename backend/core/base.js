// Common
const lodash = require("lodash");

class Base {
    constructor() {
    }

    // Common Methods
    // ================================
    /**
     * 调试信息
     *
     * @param {*} msg
     * @memberof Service
     */
    debug(msg) {
        if (process.env.NODE_ENV == "development") {
            console.log(msg);
        }
    }
}

module.exports = { Base };
