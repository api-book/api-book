const { Service } = require("../../core/service");
// const Data = require("../../models").user.Data;

class DataService extends Service {
    constructor() {
        super();
    }

    /**
     * 创建
     *
     * @param {*} data
     * @return {*}
     * @memberof DataService
     */
    async create(data) {
    }
}

module.exports = new DataService();
