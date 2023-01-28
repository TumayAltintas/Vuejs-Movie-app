import {createApp} from 'vue'
import App from './views/App.vue'
import router from './router/router.js'
import {appAxios} from "./axios/AppAxios.js";
import store from "./store/store.js";
import Header from "./components/HeaderAndOthers/Header.vue";
import {
    API_KEY,
    API_TV_POPULAR_URL,
    API_TRENDING_DAY,
    API_TRENDING_WEEK, API_TV, API_MOVIE, API_IMG_URL, API_SEARCH, API_PEOPLE
} from "./Globaljs/Globaljs.js"

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.API_KEY = API_KEY
app.config.globalProperties.API_TV_POPULAR_URL = API_TV_POPULAR_URL
app.config.globalProperties.API_TRENDING_DAY = API_TRENDING_DAY
app.config.globalProperties.API_TRENDING_WEEK = API_TRENDING_WEEK
app.config.globalProperties.API_TV = API_TV
app.config.globalProperties.API_MOVIE = API_MOVIE
app.config.globalProperties.API_IMG_URL = API_IMG_URL
app.config.globalProperties.API_SEARCH = API_SEARCH
app.config.globalProperties.API_PEOPLE = API_PEOPLE
app.config.globalProperties.$appAxios = appAxios
app.component("Top-Header", Header)
app.mount('#app')
