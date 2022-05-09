const { Service } = require("../../core/service");
const Menu = require("../../models").setting.menu;

class MenuService extends Service {
    constructor() {
        super();
    }

    /**
     * 列表
     *
     * @memberof MenuService
     */
    async list() {
        
    }
}

module.exports = new MenuService();
