import { defineStore } from "pinia";
import { getMenu, getConfigs, getNav } from "@/service";
import type { MenuItem, Config, NavItem } from "./types";

export const useStore = defineStore('main', {
    state: () => {
        return {
            menu: [] as MenuItem[],
            config: {} as Config,
            navs: [] as NavItem[],
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
        },
        async loadNav() {
            try {
                this.navs = await getNav();
            } catch (e) {
                this.navs = [];
                console.log('loadNav error:', e);
            }
        }
    },
    getters: {
        groupname(): string {
            return this.menu[this.activeIndex]?.['name'];
        },
        focus(): boolean {
            return this.sideNavShow || this.topMenuShow || this.btnGroupShow || this.dialog;
        },
        screenWitdh(): number {
            return window.innerWidth;
        }
    }
});

export type MainStore = typeof useStore;
