// Config Sequelize options
// pool and dialect
module.exports = {
    dialect: "mysql",
    pool: {
        max: 5, //最大连接数，cpu核数*2
        min: 0,
        acquire: 20000, //连接出错的时候，在抛出错误之前，池子会尝试建立连接的最大时间，重新连接成功就不抛出错误，不行才再抛
        idle: 30000, //闲置的连接超过多少毫秒被释放
    },
    logging: process.env.NODE_ENV == "development" ? true : false,
    timezone: "+08:00",
    define: {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: false,
    },
};
