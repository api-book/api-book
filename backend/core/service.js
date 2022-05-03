// Basic Service Extends by service/*
const { Base } = require("./base");

// MySQL
// const DB = require("./mysql");
// const models = require("../models");
const { Op, Sequelize } = require("sequelize");

class Service extends Base {
    constructor() {
        super();

        // MySQL
        this.Op = Op;
        this.Sequelize = Sequelize;
        // this.DB = DB;
        // this.models = models;
    }

    /**
     * 捕获错误
     *
     * @param {*} err
     * @return {*}
     * @memberof Service
     */
    log(err) {
        return console.error(`[${this.constructor.name}]`, err);
    }

}
module.exports = { Service, Sequelize, Op };
