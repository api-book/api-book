<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

// store
import demoStore from '../store/pinia_store'
const store = demoStore()
console.log(store.name)
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="doSomething">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<script lang="ts">
// import { getBox } from "@/service/demo";
export default {
    name: "HelloWorld",
    props: [],
    inject: ["SEO"],
    components: {},
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        doSomething: function () {
            // this.count++;
            // this.SEO.title = "Hello!";
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        // console.log(this.SEO);
        // getBox().then((res) => {
            // console.log(res.data);
        // });
    },
};
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
