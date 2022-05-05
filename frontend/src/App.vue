<script setup lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from '@/components/Sidebar.vue';

import { onMounted, watch, computed } from "vue";
import { useStore } from "@/store/pinia_store";
import type { NavItem } from '@/store/types'
import router from "./router";

const store = useStore();
onMounted(() => {
    store.loadMenu();
    store.loadConfig();
    store.loadNav();
})

const nav = computed(() => {
    return store.nav;
})

watch(nav, (val: NavItem[]) => {
    if (val?.length) {
        val.forEach(async (item) => {
            await router.addRoute({
                path: item.path,
                name: item.name.toLowerCase(),
                component: () => {
                    return nav.name === 'Home' ? import('@/views/Home.vue') : import('@/views/NoteBook.vue')
                }
            })
        })
        console.log(val)
    }
})

</script>

<template>
    <Header />
    <Sidebar />
    <router-view />
</template>

<style lang="less">
@import "@/assets/css/app.less";
</style>
