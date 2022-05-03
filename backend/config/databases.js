// Config Database
// The connection info is defined in .env file

const { DB_USER, DB_PWD, DB_HOST, DB_PORT } = process.env;

module.exports = [
    {
        type: "mysql",
        uuid: "apibook",
        gate: {
            database: "apibook",
            username: DB_USER,
            password: DB_PWD,
            host: DB_HOST,
            port: DB_PORT,
        },
    },
];
