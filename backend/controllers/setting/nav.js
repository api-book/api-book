const { Controller } = require("../../core/controller");
const NavService = require("../../service/setting/nav");

class NavController extends Controller {
    constructor() {
        super();
    }

    async listNavigation(request,h){
        let data = await NavService.list()
        return this.success(data)
    }
}

module.exports = new NavController();
