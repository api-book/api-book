<template>
    <nav class="c-sidebar-nav">
        <a
            v-for="item in navs"
            :title="item.title"
            :key="item.name"
            @click="handleClick(item.name)"
            :class="{ active: item.name === activeName }"
        >
            {{ item.name }}
        </a>
    </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from '@/store/pinia_store'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()
const activeName = ref('')

const navs = computed(() => {
    const isDev = store.isDev;
    let navs = store.navs;
    if (!isDev) {
        return navs.fliter((item: { devonly: boolean }) => !item.devonly);
    }
    return navs;
})
const routeName = computed(() => {
    return route.name;
})

const handleClick = (name: string) => {
    activeName.value = name;
    router.push({ name: routeName.value, params: { type: name } })
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
        cursor: pointer;

        &:hover {
            font-weight: bold;
        }
    }

    .active {
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
