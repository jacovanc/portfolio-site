import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
	// {
	// 	path: "/",
	// 	name: "Home",
	// 	component: Home
	// },
	{
		path: "/",
		name: "About",
		component: About,
		meta: {
			title: 'Jaco van Cranenburgh',
		},
	},
	// {
	// 	path: "/portfolio",
	// 	name: "Portfolio",
	// 	component: Portfolio
	// },
	{
		path: "/blog",
		name: "Blog",
		component: Blog
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: PageNotFound
	}
];

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHashHistory(),
	routes
});

export default router;
