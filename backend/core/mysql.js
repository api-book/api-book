// Connect all the mysqls

const Sequelize = require("sequelize");
const db = {};
db.Sequelize = Sequelize;

const databases = require("../config/databases");
const mysqlConfig = require("../config/mysql");

databases.map((database) => {
    if (database.type == "mysql") {
        let sequelize = new Sequelize(
            Object.assign({},database.gate, mysqlConfig)
        );

        sequelize
            .authenticate()
            .then(() => {
                console.log(
                    `[${database.uuid}] Connection has been established successfully.`
                );
            })
            .catch((err) => {
                console.error(
                    `Unable to connect to the database:${database.uuid}`,
                    err
                );
            });

        sequelize.sync();

        db[database.uuid] = sequelize
    }
});

module.exports = db;
