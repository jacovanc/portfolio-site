<template>
	<div class="main-wrapper" id="touchsurface" v-on:touchstart="touchStart" v-on:touchend="touchEnd">
		<div id="nav">
			<div class="inner-wrapper">
				<router-link to="/" class="site-title">
					Jaco van Cranenburgh
				</router-link>
				<div class="links">
					<router-link to="/">About</router-link> |
					<!-- <router-link to="/portfolio">Portfolio</router-link> | -->
					<router-link to="/blog">Blog</router-link> |
					<a :href="`${urlCV}`" target="_blank">CV</a>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="outer-wrapper">
			<router-view />
			<!-- <div class="back-to-top" v-if="largeContent" v-on:click="backToTop"></div> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			swipedir: null,
			startX: null,
			startY: null,
			distX: null,
			distY: null,
			threshold: 100,
			restraint: 100,
			allowedTime: 500,
			elapsedTime: null,
			startTime: null,

			pages: ["/", "/portfolio", "/blog"],

			largeContent: false,

			urlCV: process.env.BASE_URL + "/jaco-van-cranenburgh-CV.pdf"
		}
	},
	created() {
		if(window.location.protocol != 'https:' && window.location.href.includes('jacovan')) {
			location.href =   location.href.replace("http://", "https://");
		}
	},
	computed: {
		currentRoute() {
			return this.$route.path;
		},
		pageIndex() {
			return this.pages.indexOf(this.currentRoute);
		},
	},
	methods: {
		// Handle swiping listener for route changes on mobile
		touchStart: function(e) {
			var touchobj = e.changedTouches[0];
			this.swipedir = 'none';
			this.startX = touchobj.pageX;
			this.startY = touchobj.pageY;
			this.startTime = new Date().getTime(); // record time when finger first makes contact with surface
		},	
		touchEnd: function(e) {
			var touchobj = e.changedTouches[0];
			this.distX = touchobj.pageX - this.startX; // get horizontal dist traveled by finger while in contact with surface
			this.distY = touchobj.pageY - this.startY; // get vertical dist traveled by finger while in contact with surface
			this.elapsedTime = new Date().getTime() - this.startTime; // get time elapsed
			if (this.elapsedTime <= this.allowedTime) { // first condition for awipe met
				if (Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint) { // 2nd condition for horizontal swipe met
					this.swipedir = (this.distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
				}
				else if (Math.abs(this.distY) >= this.threshold && Math.abs(this.distX) <= this.restraint) { // 2nd condition for vertical swipe met
					this.swipedir = (this.distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
				}
			}
			if(this.pageIndex >= 0 && this.pageIndex <= this.pages.length-1) {
				if(this.swipedir == "right") {
					this.nextRoute = this.pages[this.pageIndex - 1];
				} else if (this.swipedir == "left") {
					this.nextRoute = this.pages[this.pageIndex + 1];
				}
				if(this.nextRoute !== undefined) {
					this.$router.push(this.nextRoute);
				}
			}
		},
		backToTop: function() {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	}
}
</script>


<style>
	html, body {
		height: 100%;
	}
	#app, .main-wrapper {
		height: 100%;
	}
	/* Generic */
	.clear {
		clear: both;
	}
	.logo-img {
		height: 32px;
		vertical-align: middle
	}
	.logo-img.linkedin {
		height: 32px;
	}
	body {
		margin: 0;
	}
	a {
		color: #4457ff;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.outer-wrapper {
		padding: 15px;
		padding-bottom: 60px;
		position: relative;
		box-sizing: border-box;
	}
	.inner-wrapper {
		width: 840px;
		max-width: 100%;
		margin: 0 auto;
		text-align: left;
	}
	h1 {
		text-align: center;
		margin-bottom: 0.3em;
	}
	h2 {
		margin-bottom: 0.3em;
	}
	p {
		margin: 0.5em 0;
	}
	/* Layout  */
	#nav {
		padding: 20px 30px;
		width: 100%;
		box-sizing: border-box;
		font-weight: bold;
		color: #2c3e50;
		border-bottom: 1px solid #f1f1f1;
		background-color: #fcfcfc;
	}
	#nav .links {
		float: right;
		line-height: 25px;
	}
	#nav .links * {
		vertical-align: middle;
	}
	#nav .site-title{
		float: left;
		text-decoration: none;
		color: #2c3e50;
		font-size: 25px;
	}

	#nav .links a {
		color: inherit;
	}

	#nav .links a.router-link-exact-active {
		color: #4457ff;
	}

	.back-to-top {
		width: 25px;
		height: 25px;

		margin: 0 auto;
		position: absolute;
		bottom: 10px;
		left: 50%;
		cursor: pointer;

		border: solid #bfbfbf;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		transform: translate(-50%) rotate(-135deg);
		-webkit-transform: translate(-50%) rotate(-135deg);
		
		animation: pulse 5s infinite;
	}

	@keyframes pulse {
		0% {
			transform: translate(-50%) rotate(-135deg) scale(1);
			-webkit-transform: translate(-50%) rotate(-135deg) scale(1);
		}
		10% {
			transform: translate(-50%) rotate(-135deg) scale(1.2);
			-webkit-transform: translate(-50%) rotate(-135deg) scale(1.2);
		}
		20% {
			transform: translate(-50%) rotate(-135deg) scale(1);
			-webkit-transform: translate(-50%) rotate(-135deg) scale(1);
		}
	}
	@media screen and (max-width: 530px) {
		#nav {
			text-align: left;
		}
		#nav .site-title {
			display: block;
			float: none;
		}
		#nav .links {
			float: none;
			display: block;
		}
	}
</style>
