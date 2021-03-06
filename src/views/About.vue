<template>
	<div class="inner-wrapper about">
		<h1>About</h1>
		<img :src="`${publicPath}me.jpg`" alt="This is a picture of me - please don't spend too much time looking at it.">
		<p>
			I'm a Web Developer with a particular interest in decentralized systems (and a fascinated by Bitcoin). <br/>
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
				<li></li>
			</ul>
		</p>
		<h2>Contact</h2>
		<p>You can find me on Twitter, add me on LinkedIn or shoot me an email at jacovancr[at]gmail[dot]com</p>
		<h2>This site</h2>
		<p>
			This site is hosted in a decentralized fashion, by being a static site and utilising IPFS (InterPlanetary File System - great name) for hosting without the need for a single, centralized service.
			The only remaining challenge is the domain name. This site can be accessed by both ____ and ____ - the latter being decentralized, but unfortunately requiring ____ in order to work.
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
	.about img {
		float: right;
		width: 250px;
	}
</style>