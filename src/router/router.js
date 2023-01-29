import {createRouter, createWebHashHistory} from 'vue-router'


const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{path: '/', name: 'home', component: () => import('../views/Home.vue')},

		{path: '/MovieDetail/:id', name: 'MovieDetail', component: () => import('../views/MovieView/MovieDetails.vue')},

		{path: '/Movie/:name', name: 'Movie', component: () => import('../views/MovieView/Movie.vue')},

		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') },

		// {path: '/Tv/:id/name/:name', name: 'TvDetail', component: () => import('../views/TvView/TvDetails.vue')},

		{path: '/TvDetail/:id', name: 'TvDetail', component: () => import('../views/TvView/TvDetails.vue')},

		{path: '/Tv/:name', name: 'Tv', component: () => import('../views/TvView/Tv.vue')},

		{path: '/Person/:id/:name', name: 'Person', component: () => import('../views/Person/Person.vue')},

		{path: '/Register', name: 'Register', component: () => import('../components/Login-Register/Register.vue')},

		{path: '/Login-Register', name: 'Login-Register', component: () => import('../views/Login-Register/Login-Register.vue')},

		{path: '/search/:query', name: 'search', component: () => import('../views/Search/Search.vue')},

		{path: '/t', name: 't', component: () => import('../components/test/test4.vue')},

		{path: '/t3', name: 't3', component: () => import('../components/test/test3.vue')},

	]
});


export default router;

// router.beforeEach((to, _, next) => {
// 	const authRequiredRoutes = [""];
// 	const authNotRequiredRoutes = [];
// 	const _isAuthenticated = store.getters._isAuthenticated;
//
// 	if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
//
// 	if (authRequiredRoutes.indexOf(to.name) > -1) {
// 		if (_isAuthenticated) next();
// 		else next({path: "/"});
// 	} else {
// 		next();
// 	}
// });