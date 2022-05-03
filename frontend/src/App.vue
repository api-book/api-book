<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

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
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello World" />
    <router-view />
</template>

<style lang="less">
@import "@/assets/css/app.less";
</style>
