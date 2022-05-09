const { Controller } = require("../../core/controller");
const MenuService = require("../../service/setting/menu");

class MenuController extends Controller {
    constructor() {
        super();
    }
    /**
     * 获取菜单列表
     *
     * @param {*} request
     * @param {*} h
     * @return {*}
     * @memberof MenuController
     */
    async listMenu(request, h) {
        let data = await MenuService.list();
        return this.success(data);
    }
}

module.exports = new MenuController();
