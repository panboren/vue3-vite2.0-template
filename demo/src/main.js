import { createApp } from 'vue'
import './assets/css/reset.min.css'
import store from "./store";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')