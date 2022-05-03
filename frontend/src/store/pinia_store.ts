import { defineStore } from "pinia";

const demoStore = defineStore({
    id: "demo", // id必填，且需要唯一
    state: () => {
        return {
            name: "demo",
        };
    },
});


export default demoStore