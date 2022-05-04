<template>
    <header class="c-header">
        <h1 class="c-header-logo">
            <i class="u-logo"></i>
            <a class="u-title" href="/">{{ title }}</a>
        </h1>
        <Menu />
        <div class="c-header-panel">
            <i class="u-handler u-handler-left" @click="showSideNav"></i>
            <i
                class="u-handler u-handler-center"
                @click="showMenu"
                :class="{ active: topMenuShow }"
            >{{ groupname }}</i
            >
            <i class="u-handler u-handler-right" @click="showBtnGroup"></i>
            <div
                class="u-btngroup"
                :class="{ active: btnGroupShow }"
            >
                <Button
                    v-if="editshow"
                    class="u-btn-white u-btn-edit"
                    :text="t('edit')"
                    :class="{ active: isEditMode }"
                    @click.native="enterEditMode"
                ><i slot="icon" class="u-icon u-icon-edit"></i
                ></Button>
                <Button
                    v-if="exportshow"
                    class="u-btn-green u-btn-export"
                    :text="t('export')"
                    @click.native="exportTableData"
                ><i slot="icon" class="u-icon u-icon-save"></i
                ></Button>
                <Github v-if="!isDev" :link="repository" text="Fork" />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import Menu from "@/components/Menu.vue";
import Button from '@/components/Button.vue';
import Github from '@/components/Github.vue';

import { computed } from "vue";
import { useStore } from "@/store/pinia_store";
import { useI18n } from "vue-i18n";

export default {
    components: {
        Menu,
        Button,
        Github,
    },
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'global'
        })
        const title = 'Api-Book'
        const repository = ''

        // store
        const store = useStore()
        const isDev = computed(() => {
            return store.isDev
        })
        const isEditMode = computed(() => {
            return store.isEditMode
        })
        const editshow = computed(() => {
            return (store.editDevOnly && isDev) || !store.editDevOnly
        })
        const exportshow = computed(() => {
            return (store.exportDevOnly && isDev) || !store.exportDevOnly
        })
        const topMenuShow = computed(() => {
            return store.topMenuShow
        })
        const groupname = computed(() => {
            return store.groupname
        })
        const btnGroupShow = computed(() => {
            return store.btnGroupShow
        })

        // methods
        const enterEditMode = () => {
            store.isEditMode = !store.isEditMode
            store.btnGroupShow = false
        }
        const showBtnGroup = () => {
            store.btnGroupShow = !store.btnGroupShow
            checkFocus()
            store.topMenuShow = false
        }
        const showSideNav = () => {
            store.sideNavShow = !store.sideNavShow
            checkFocus()
            store.topMenuShow = false
        }
        const showMenu = () => {
            store.topMenuShow = !store.topMenuShow
            checkFocus()
            store.btnGroupShow = false
            store.sideNavShow = false
        }
        const checkFocus = () => {
            store.mask = store.focus
        }
        const exportTableData = () => {
            console.log(11)
        }

        return {
            t,
            title,
            repository,
            isDev,
            isEditMode,
            editshow,
            exportshow,
            topMenuShow,
            groupname,
            btnGroupShow,

            // methods
            enterEditMode,
            showBtnGroup,
            showSideNav,
            showMenu,
            exportTableData,
        }
    }
}

</script>

<style lang="less">
    @import "../assets/css/var.less";
    .c-header {
        background-color: @black;
        border-bottom: 1px solid @header-border-bottom;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        height: @header-height;
        width: 100%;
        z-index: @base-z;
    }
    .c-header-logo {
        display: block;
        float: left;
        width: @sidebar-width;
        height: @header-height;
        margin: 0;
        padding: 0;

        .u-logo {
            width: 68px;
            height: 68px;
            float: left;
            display: block;
            background: url('@/assets/img/logo.png') no-repeat center center;
            background-size: contain;
            margin-top: -15px;
            margin-left: 5px;
            margin-right: 8px;
        }

        @keyframes rotateLogo {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(360deg);
            }
        }

        overflow: hidden;
        &:hover {
            .u-logo {
                animation: rotateLogo 8s linear infinite;
            }
        }

        .u-title {
            font-family: Trebuchet MS, Helvetica, Arial;
            font-weight: normal;
            -webkit-font-smoothing: antialiased;
            font-size: 28px;
            line-height: @header-height;
            text-shadow: 2px 2px 2px #000000;

            color: #eee;
            -webkit-transition: 0.6s;
            transition: 0.6s;

            &:hover {
                color: @blue;
            }
        }
    }
    .c-header-panel {
        float: right;
        padding: 5px 0;

        .u-handler {
            display: none;
        }

        .u-handler-left {
            width: 42px;
            height: 100%;
            background: url("../assets/img/nav.svg") no-repeat center center;
            background-size: auto 65%;
            position: absolute;
            left: 0;
            top: 0;
        }
        .u-handler-right {
            width: 32px;
            height: @header-height - 5px * 2;
            background: url("../assets/img/panel.svg") no-repeat center center;
            background-size: auto 80%;
            float: right;
        }
        .u-handler-center {
            width: 180px;
            height: @header-height;
            line-height: @header-height;
            color: #fff;
            text-align: center;
            font-size: 20px;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            &:after {
                content: "";
                display: inline-block;
                width: 14px;
                height: 14px;
                background: url("../assets/img/arrow.svg") no-repeat center center;
                background-size: contain;
                margin-left: 6px;
                vertical-align: middle;
            }
            &.active {
                &:after {
                    transform: rotate(180deg);
                }
            }
        }
        .u-btngroup {
            &::after {
                content: "";
                display: table;
                clear: both;
            }
        }

        .u-btn {
            display: block;
            float: left;
            margin-right: 6px;
        }

        .u-icon {
            margin-right: 2px;
        }
        .u-icon-save {
            margin-right: 4px;
        }
    }
    @media screen and (max-width: @phone) {
        .c-header {
            z-index: @mobile-z;
        }
        .c-header-logo {
            display: none;
        }
        .c-header-panel {
            .u-handler {
                display: block;
            }
            .u-btngroup {
                clear: right;
                transform: translateX(100%);
                transition: 0.2s ease-in-out;
                &.active {
                    transform: translateX(0);
                }
            }
            .u-btn {
                margin-top: 10px;
            }
        }
    }
</style>
