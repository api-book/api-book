<template>
    <nav class="c-sidebar-nav">
        <router-link
            v-for="item in navs"
            :to="item.path"
            :title="item.title"
            :key="item.name"
        >
            {{ item.name }}
        </router-link>
    </nav>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store/pinia_store'
export default {
    name: 'Nav',
    setup() {
        const store = useStore()

        const navs = computed(() => {
            const isDev = store.isDev;
            let navs = store.navs;
            if (!isDev) {
                return navs.fliter((item: { devonly: boolean }) => !item.devonly);
            }
            return navs;
        })

        return {
            navs
        }
    }
}
</script>

<style lang="less">
@import '../assets/css/var.less';
.c-sidebar-nav {
    position: absolute;
    left: 0;
    right: -1px;
    top: 0;
    bottom: @footer-height;
    overflow-y: auto;
    overflow-x: hidden;

    a {
        display: block;
        border-bottom: 1px solid @nav-border;
        padding: 5px 10px;
        color: @nav-color;
        line-height: 1.8;

        &:hover {
            font-weight: bold;
        }
    }

    .router-link-exact-active {
        font-weight: bold;
        background-color: #fff;
        border-right: 1px solid #fff;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track,&::-webkit-scrollbar-track-piece {
        background-color: #fafafa;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #eee;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-button,&::-webkit-scrollbar-corner,&::-webkit-resizer {
        display: none;
    }
}
</style>
