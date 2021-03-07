import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";

const routes = [
	// {
	// 	path: "/",
	// 	name: "Home",
	// 	component: Home
	// },
	{
		path: "/",
		name: "About",
		component: About
	},
	{
		path: "/portfolio",
		name: "Portfolio",
		component: Portfolio
	},
	{
		path: "/blog",
		name: "Blog",
		component: Blog
	},
];

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHashHistory(),
	routes
});

export default router;
