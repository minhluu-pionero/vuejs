import 'vue3-toastify/dist/index.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import store, { storeKey } from '@/store'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(store, storeKey)
app.use(router)
app.use(vuetify)
app.use(Vue3Toastify, {
  autoClose: 5000
} as ToastContainerOptions)

app.mount('#app')
