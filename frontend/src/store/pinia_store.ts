import { defineStore } from "pinia";
import { getMenu, getConfigs } from "@/service";
import type { MenuItem, Config } from "./types";

export const useStore = defineStore('main', {
    state: () => {
        return {
            menu: [] as MenuItem[],
            config: {} as Config,
            activeIndex: 0,

            isDev: import.meta.env.DEV,
            isEditMode: false,
            fullscreen: false,

            // Btn
            btnGroupShow: false,
            sideNavShow: false,
            topMenuShow: false,

            // Input
            dialog: false,
            mask: false,
        };
    },

    actions: {
        async loadMenu() {
            try {
                this.menu = await getMenu();
            } catch (e) {
                this.menu = [];
                console.log('loadMenu error:', e);
            }
        },
        async loadConfig() {
            try {
                this.config = await getConfigs();
            } catch (e) {
                this.config = {};
                console.log('loadConfig error:', e);
            }
        }
    },
    getters: {
        groupname(): string {
            return this.menu[this.activeIndex]?.['name'];
        },
        focus(): boolean {
            return this.sideNavShow || this.topMenuShow || this.btnGroupShow || this.dialog;
        }
    }
});
