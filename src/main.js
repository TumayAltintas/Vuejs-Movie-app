import {createApp} from 'vue'
import App from './views/App.vue'
import router from './router/router.js'
import {appAxios} from "./axios/AppAxios.js";
import store from "./store/store.js";
import Header from "./components/HeaderAndOthers/Header.vue";
import{API_KEY} from "./components/HeaderAndOthers/Globaljs.js"



const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.API_KEY = API_KEY
app.config.globalProperties.$appAxios = appAxios
app.component("Top-Header", Header)
app.mount('#app')
