<template>
	<div>
		<div id="nav">
			<router-link to="/" class="site-title">
				Jaco van Cranenburgh
			</router-link>
			<div class="links">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/portfolio">Portfolio</router-link> |
				<router-link to="/blog">Writing</router-link>
				<!-- <router-link to="/cv">CV</router-link> -->
			</div>
		
			<div class="clear"></div>
		</div>
		<div class="outer-wrapper">
			<router-view />
		</div>
	</div>
</template>

<style>
	/* Generic */
	.clear {
		clear: both;
	}
	body {
		margin: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.inner-wrapper {
		width: 840px;
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
</style>
