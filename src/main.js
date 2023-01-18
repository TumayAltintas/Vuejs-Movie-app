import {createApp} from 'vue'
import App from './views/App.vue'
import router from './router/router.js'
import {appAxios} from "./axios/AppAxios.js";
import store from "./store/store.js";
import Header from "./components/HeaderAndOthers/Header.vue";




const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.component("Top-Header", Header)
app.mount('#app')
