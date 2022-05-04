// 1.Create APP
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 2.Components
import { createHead } from '@vueuse/head'
const head = createHead()
app.use(head)

import router from './router/index';
app.use(router)

import store from './store/pinia';
app.use(store)

// 3.i18n
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    legacy: false,
    locale: 'zh-cn',
    globalInjection: true,
    messages
})
app.use(i18n)

// 4.Mount DOM
app.mount('#app')
