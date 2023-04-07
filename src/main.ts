import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import 'virtual:fonts.css'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import { vMaska } from 'maska'

import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue'

import '@/styles/index.scss'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)

app.use(createPinia())

app.directive('maska', vMaska)

app.use(router)

app.use(ElementPlus)

app.mount('#app')
