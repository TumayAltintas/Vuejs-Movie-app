import {createRouter, createWebHistory} from 'vue-router'

import store from "../../store/store.js";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', name: 'home', component: () => import('../views/Home.vue')},

		{path: '/Movie/NowPlaying', name: 'NowPlaying', component: () => import('../views/MovieView/Movie-Now-Playing.vue')},

		{path: '/Movie/Popular', name: 'Popular', component: () => import('../views/MovieView/Popular.vue')},

		{path: '/Movie/MovieUpComing', name: 'MovieUpComing', component: () => import('../views/MovieView/UpComing.vue')},

		{path: '/Movie/:id', name: 'MovieDetail', component: () => import('../views/MovieView/MovieDetails.vue')},

		{path: '/Tv/:id', name: 'TvDetail', component: () => import('../views/TvView/TvDetails.vue')},

		{path: '/Tv/AiringToday', name: 'TvAiringToday', component: () => import('../views/TvView/AiringNow.vue')},

		{path: '/Tv/OnTheAir', name: 'TvOnTheAir', component: () => import('../views/TvView/OnTheAir.vue')},

		{path: '/Tv/Popular', name: 'TvPopular', component: () => import('../views/TvView/Popular.vue')},

		{path: '/Tv/TopRated', name: 'TvTopRated', component: () => import('../views/TvView/TopRated.vue')},

		{path: '/Register', name: 'Register', component: () => import('../components/Login-Register/Register.vue')},

		{path: '/Login-Register', name: 'Login-Register', component: () => import('../views/Login-Register/Login-Register.vue')},







		{path: '/test2', name: 'test2', component: () => import('../components/MoviePages/test2.vue')},
	]
});

export default router;

router.beforeEach((to, _, next) => {
	const authRequiredRoutes = [""];
	const authNotRequiredRoutes = [];
	const _isAuthenticated = store.getters._isAuthenticated;

	if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

	if (authRequiredRoutes.indexOf(to.name) > -1) {
		if (_isAuthenticated) next();
		else next({path: "/"});
	} else {
		next();
	}
});