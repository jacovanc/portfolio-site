<template>
	<div class="main-wrapper">
		<div id="nav">
			<div class="inner-wrapper">
				<router-link to="/" class="site-title">
					Jaco van Cranenburgh
				</router-link>
				<div class="links">
					<router-link to="/">About</router-link> |
					<router-link to="/portfolio">Portfolio</router-link> |
					<router-link to="/blog">Blog</router-link>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="outer-wrapper" id="touchsurface" v-on:touchstart="touchStart" v-on:touchend="touchEnd">
			<router-view />
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
		}
	},
	computed: {
		currentRoute() {
			return this.$route.path;
		},
		pageIndex() {
			return this.pages.indexOf(this.currentRoute);
		}
	},
	methods: {
		// Handle swiping listener for route changes on mobile
		touchStart: function(e){
			var touchobj = e.changedTouches[0]
			this.swipedir = 'none'
			this.startX = touchobj.pageX
			this.startY = touchobj.pageY
			this.startTime = new Date().getTime() // record time when finger first makes contact with surface
		},	
		touchEnd: function(e){
			var touchobj = e.changedTouches[0]
			this.distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
			this.distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
			this.elapsedTime = new Date().getTime() - this.startTime // get time elapsed
			if (this.elapsedTime <= this.allowedTime){ // first condition for awipe met
				if (Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint){ // 2nd condition for horizontal swipe met
					this.swipedir = (this.distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
				}
				else if (Math.abs(this.distY) >= this.threshold && Math.abs(this.distX) <= this.restraint){ // 2nd condition for vertical swipe met
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
		}
	}
}
</script>


<style>
	body {
		height: 100vh;
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
		height: 100%;
	}
	.inner-wrapper {
		width: 840px;
		max-width: 100%;
		margin: 0 auto;
		text-align: left;
	}
	h1 {
		text-align: center;
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
