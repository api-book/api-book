module.exports = [
    {
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return 'Hello,my api-book!'
        },
        options: {
            tags: ["api", "Misc"],
            description: "Test",
        },
    },
]
