// Basic Controller Extends by controllers/*
const { Base } = require("./base");
const { Sequelize, Op } = require("sequelize");

// CODE
const ERROR_CODES = require("../setting/err_code_map");

class Controller extends Base {
    constructor() {
        super();
    }

    // Response
    // ================================
    /**
     * 成功响应包装
     *
     * @param {*} data
     * @return {*}
     * @memberof Controller
     */
    success(data) {
        return {
            code: 0,
            msg: "Success",
            data,
        };
    }

    /**
     * 失败响应包装
     *
     * @param {*} code
     * @return {*}
     * @memberof Controller
     */
    fail(code) {
        return {
            code: code,
            msg: ERROR_CODES[code],
            data: null,
        };
    }
}

module.exports = { Controller };
