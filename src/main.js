import {createApp} from 'vue'
import App from './views/App.vue'
import router from './router/router.js'
import {appAxios} from "./axios/AppAxios.js";
import store from "./store/store.js";
import Header from "./components/HeaderAndOthers/Header.vue";
import {
    API_KEY,
    API_MOVIE_TOP_URL,
    API_MOVIE_POPULAR_URL,
    API_MOVIE_NOWPLAYING_URL,
    API_MOVIE_UPCOMING_URL,
    API_TV_POPULAR_URL,
    API_TV_AIRINGTODAY_URL,
    TOP_TV_TOP_URL,
    API_TV_ONTHEAIR_URL,
    API_TRENDING_DAY,
    API_TRENDING_WEEK, API_TV_DETAILS, API_MOVIE_DETAILS, API_IMG_URL, API_SEARCH, API_PEOPLE
} from "./Globaljs/Globaljs.js"

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.API_KEY = API_KEY
app.config.globalProperties.API_MOVIE_TOP_URL = API_MOVIE_TOP_URL
app.config.globalProperties.API_TV_POPULAR_URL = API_TV_POPULAR_URL
app.config.globalProperties.API_MOVIE_NOWPLAYING_URL = API_MOVIE_NOWPLAYING_URL
app.config.globalProperties.API_MOVIE_POPULAR_URL = API_MOVIE_POPULAR_URL
app.config.globalProperties.API_MOVIE_UPCOMING_URL = API_MOVIE_UPCOMING_URL
app.config.globalProperties.API_TV_AIRINGTODAY_URL = API_TV_AIRINGTODAY_URL
app.config.globalProperties.TOP_TV_TOP_URL = TOP_TV_TOP_URL
app.config.globalProperties.API_TV_ONTHEAIR_URL = API_TV_ONTHEAIR_URL
app.config.globalProperties.API_TRENDING_DAY = API_TRENDING_DAY
app.config.globalProperties.API_TRENDING_WEEK = API_TRENDING_WEEK
app.config.globalProperties.API_TV_DETAILS = API_TV_DETAILS
app.config.globalProperties.API_MOVIE_DETAILS = API_MOVIE_DETAILS
app.config.globalProperties.API_IMG_URL = API_IMG_URL
app.config.globalProperties.API_SEARCH = API_SEARCH
app.config.globalProperties.API_PEOPLE = API_PEOPLE
app.config.globalProperties.$appAxios = appAxios
app.component("Top-Header", Header)
app.mount('#app')
