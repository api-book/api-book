module.exports = {

    // Route options
    options : {
        prefix: "/api",
    },

    // CORS
    cors : {
        origin: ['*'],
        headers: ["Access-Control-Allow-Headers", "Access-Control-Allow-Origin","Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"],
        additionalHeaders: ['cache-control', 'x-requested-with'],
        credentials: true
    }
};
