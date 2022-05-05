<template>
    <ul :class="{ on: topMenuShow }" class="c-header-menu">
        <li v-for="(item, index) in menu" :key="item.name" :class="{ active: index === activeIndex }">
            <a :href="item.url" target="_blank" @click.stop="handleClick(index)">{{ item.name }}</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { useStore } from "@/store/pinia_store";
import { computed } from "vue";

export default {
    setup() {
        const store = useStore();

        // computed
        const topMenuShow = computed(() => {
            return store.topMenuShow;
        });
        const menu = computed(() => {
            return store.menu;
        });
        const activeIndex = computed(() => {
            return store.activeIndex;
        });

        // methods
        const handleClick = (index: number) => {
            store.activeIndex = index;
        };
        return {
            topMenuShow,
            menu,
            activeIndex,
            handleClick,
        };
    },
};
</script>

<style lang="less">
@import '../assets/css/var.less';
.c-header-menu {
    float: left;
    li {
        height: 38px;
        line-height: 38px;
        cursor: pointer;
        font-family: Trebuchet MS;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid @menu-border-color;
        border-left: 1px solid @menu-border-color;
        margin-left: -1px;

        &:first-child {
            margin-left: 0;
        }
        float: left;
    }
    a {
        padding: 0 20px;
        display: block;
        height: 100%;
        color: @header-font-color;
    }
    li:hover {
        a {
            color:@blue;
        }
    }
    .active {
        position: relative;
        border-color: @blue;
        a {
            color: @blue;
            background: @menu-active-bg;
        }
        &:hover {
            a {
                color: @blue;
            }
        }
    }
}
@media screen and (max-width:@phone){
    .c-header-menu{
        &::after{
            content:"";display:table;clear:both;
        }
        position: fixed;
        top:@header-height;
        float:none;
        width:100%;
        li{
            float:none;
            border:none;
            border-bottom:1px solid #303c48 !important;
            background-color: @black;
        }
        .active a{
            background-color: #292e33;
        }

        display:none;
        &.on{
            display: block;
        }
    }
}
</style>
