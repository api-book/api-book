import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default ({ command, mode }) => {
    return defineConfig({

        // 🐳:multiple pages
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, "index.html"),
                    subpage: resolve(__dirname, "subpage/index.html"),
                },
            },
        },

        // 🌈:cross-origin
        // server: {
        //     proxy: {
        //         "/api": {
        //             target: "https://xxx",
        //             changeOrigin: true,
        //         },
        //     },
        // },

        // 📦:CDN
        base: mode == "development" ? "/" : loadEnv(mode, process.cwd()).STATIC_PATH,

        // 🌸:alias @ for ./src
        resolve: {
            alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
        },

        // ❄️:css mixins & global vars
        css: {
            preprocessorOptions: {
                less: {
                    globalVars: {
                        hack: `true;
                        @import "./node_modules/csslab/base.less";
                        @import "./src/assets/css/var.less";`,
                    },
                },
            },
        },

        // 🍬:loaders
        plugins: [vue()],
    });
};
