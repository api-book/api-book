<script setup lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from '@/components/Sidebar.vue';

import { provide, reactive, computed } from "vue";
import { useHead } from "@vueuse/head";
import { title, keys, desc } from "../setting.json";
const SEO = reactive({
    title: title,
    description: desc,
    keywords: keys,
});

useHead({
    title: computed(() => SEO.title),
    meta: [
        {
            name: `description`,
            content: computed(() => SEO.description),
        },
        {
            name: `keywords`,
            content: computed(() => SEO.keywords),
        },
    ],
});

provide("SEO", SEO);
</script>

<template>
    <Header />
    <Sidebar></Sidebar>
    <router-view />
</template>

<style lang="less">
@import "@/assets/css/app.less";
</style>
