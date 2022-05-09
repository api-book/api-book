const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("[MongoDB] connected");
    })
    .catch((err) => console.error(err));

async function main() {
    await mongoose.connect("mongodb://localhost/api-book");
}

module.exports = mongoose;
