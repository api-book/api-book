import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
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
        server: {
            port: 16240,
        },

        // 📦:CDN
        base: mode == "development" ? "/" : loadEnv(mode, process.cwd()).STATIC_PATH,

        // 🌸:alias @ for ./src
        resolve: {
            alias: {
                '/@/': resolve(__dirname, './src')
            },
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
        plugins: [
            vue(),
            vueI18n({
                include: resolve(__dirname, "./src/locales/**"),
                compositionOnly: false
            }),
        ],
    });
};
