<template>
    <aside class="c-sidebar" :class="{ isFolded: isfolded }">
        <Nav />
        <i
            :class="{ on: fullscreen }"
            class="c-sidebar-folder"
            @click="toggleSidebar"
        ></i>
    </aside>
</template>

<script lang="ts">
import Nav from '../components/Nav.vue';
import { computed } from 'vue';
import { useStore } from '../store/pinia_store';
export default {
    components: {
        Nav
    },
    setup() {
        const store = useStore();
        const isfolded = computed(() => {
            return store.screenWidth < 767 ? !store.sidebarShow : store.fullscreen;
        });
        const fullscreen = computed(() => {
            return store.fullscreen;
        });

        const toggleSidebar = () => {
            store.fullscreen = !store.fullscreen;
        };
        return {
            isfolded,
            fullscreen,
            toggleSidebar
        };
    }
}
</script>

<style lang="less">
@import '../assets/css/var.less';
.c-sidebar {
    width: @sidebar-width;
    position: fixed;
    z-index:@base-z;
    top: @header-height;
    bottom: 0;
    background-color: @sidebar-bg;
    border-right: 1px solid @sidebar-border;

    font-size: 12px;
    color: #333;
    font-family: Consolas, "Trebuchet MS", Verdana, Helvetica, Arial, sans-serif;

    transition: 0.28s ease-in-out;
    &.isFolded {
        transform: translate3d(-100%, 0, 0);
    }

    box-shadow: 0 -2px 3px inset rgba(0, 0, 0, 0.02);
}
.c-sidebar-folder {
    width: 12px;
    height: 28px;
    line-height: 28px;
    text-align: center;

    cursor: pointer;

    position: absolute;
    top: 50%;
    margin-top: -15px;
    right: 0;
    border: 1px solid #ddd;
    background-color: #fff;
    transform: translate3d(0, 0, 0);

    border-right: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;

    &:after {
        content: "<";
    }
    &:hover {
        background-color: #f7f7f7;
    }
    &.on {
        color: #fff;
        transform: translate3d(100%, 0, 0);
        border: 1px solid @blue;
        background-color: saturate(@blue,100%);

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;

        &:after {
            content: ">";
        }
        &:hover {
            background-color: lighten(@blue, 10%);
        }
    }
}
@media screen and (max-width:@phone){
    .c-sidebar{
        z-index:@mobile-z;
    }
    .c-sidebar-folder{
        display:none;
    }
}
</style>
