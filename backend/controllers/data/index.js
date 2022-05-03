const { Controller } = require("../../core/controller");
const DataService = require("../../service/data/index");

class DataController extends Controller {
    constructor() {
        super();
    }
}

module.exports = new DataController();
