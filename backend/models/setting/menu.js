const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema({
    type: {
        type : String,
        default : "tab"
    },
    name: {
        type: String,
        required: true,
    },
    groupname: {
        type: String,
    },
    url: {
        type : String,
    },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu
