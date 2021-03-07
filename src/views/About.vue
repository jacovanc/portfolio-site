<template>
	<div class="inner-wrapper about">
		<h1>About</h1>
		<div class="profile-img-container">
			<img class="profile-img" :src="`${publicPath}me.jpg`" alt="This is a picture of me - please don't spend too much time looking at it.">
		</div>
		<p>
			I'm a Web Developer with a particular interest in decentralized systems (and fascinated by Bitcoin). <br/>
			Born and raised in London - but half British + Dutch (just don't ask me to try speak it... I know much more German at this point!).
		</p>
		<h2>Work</h2>
		<p>I have 3 years experience creating dynamic sites to fulfill client needs - from brochure sites to full ecommerce with CMS control.</p>
		<p>
			In case you'd like to get technical - 
			<ul>
				<li>HTML5 / CSS</li>
				<li>Javascript</li>
				<li>PHP</li>
				<li>SQL</li>
			</ul>
		</p>
		<h2>Contact</h2>
		<p>You can find me on 
			<a href="https://twitter.com/Jac0van" target="_blank" alt="Link to Twitter">
				Twitter
				<img class="logo-img twitter" :src="`${publicPath}twitter.png`" alt="Twitter Icon">
			</a> - add me on 
			<a href="https://www.linkedin.com/in/jacovan/" target="_blank" alt="Link to LinkedIn">
				LinkedIn
				<img class="logo-img linkedin" :src="`${publicPath}linkedin.png`" alt="LinkedIn Icon">
			</a> or shoot me an email at jacovancr[at]gmail[dot]com</p>
		<h2>This site</h2>
		<p>
			This site is hosted in a decentralized fashion, by being a static site and utilising IPFS (InterPlanetary File System - great name) for hosting without the need for a single, centralized service.
			The only remaining challenge is the domain name. 
			<!-- This site can be accessed by both ____ and ____ - the latter being decentralized, but unfortunately requiring ____ in order to work. -->
		</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			publicPath: process.env.BASE_URL
		}
	}
}
</script>

<style scoped>
	.about .profile-img-container {
		width: 250px;
		height: 250px;
		overflow: hidden;
		margin-left: 15px;
		border-radius: 50%;
		float: right;
	}
	.about .profile-img {
		width: 100%;
	}
	@media screen and (max-width: 500px) {
		.about .profile-img-container {
			float: none;
			width: 250px;
			margin: 0 auto;
			display: block;
		}
	}
</style>