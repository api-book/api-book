<template>
    <div class="c-main" :class="{ isExpanded: fullscreen }">{{ currentType }}</div>
</template>

<script setup lang="ts">
import {useStore} from "@/store/pinia_store";
import {computed} from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentType = computed(() => {
    return route.params.type;
});

const store = useStore();
const fullscreen = computed(() => {
    return store.fullscreen;
});
</script>

<style lang="less">
@import "../assets/css/var.less";
@import '../assets/css/snippet.less';
.c-main {
    margin-left: @sidebar-width;
    transition: 0.5s ease-in-out;
    &.isExpanded {
        margin-left: 0;
    }

    padding: 10px;
}
@media screen and (max-width:@phone){
    .c-main{
        margin-left:0 !important;
    }
}
.c-main-primary {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
@media screen and (max-width:@phone){
    .c-main-primary{
        display: block;
    }
}
</style>
