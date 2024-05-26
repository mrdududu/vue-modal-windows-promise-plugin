import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import vueModalWindowsPromisePlugin from './plugins/vue-modal-windows-promise-plugin'

createApp(App).use(vueModalWindowsPromisePlugin).mount('#app')
