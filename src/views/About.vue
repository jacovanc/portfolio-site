<template>
	<div class="inner-wrapper about">
		<h1>About</h1>
		<div class="profile-img-container">
			<img class="profile-img" src="@/assets/me.jpg" alt="This is a picture of me - please don't spend too much time looking at it.">
		</div>
		<p>
			I'm a Web Developer with a particular interest in decentralized systems (and fascinated by Bitcoin). <br/>
			Born and raised in London - but half British/Dutch (just don't ask me to try speak it... I know much more German at this point!).
		</p>
		<p>Some facts about me:</p>
		<ul>
			<li>I am currently learning German and interested in language learning / linguistics in general</li>
			<li>I enjoy a good game of tennis</li>
			<li>I want to see a space colony on Mars</li>
		</ul>
		<h2>Work</h2>
		<p>I have 3 years experience working directly with clients as a fullstack developer creating dynamic sites to fulfil client needs - from brochure sites to full ecommerce with CMS control.</p>
		<p>If you'd like to know more about my skills/experience, feel free to take a look at my <a :href="`${urlCV}`" target="_blank">CV</a>.</p>
		<h2>Contact</h2>
		<p>
			<a href="https://www.linkedin.com/in/jacovan/" target="_blank" alt="Link to LinkedIn">
				<img class="logo-img linkedin" src="@/assets/linkedin.png" alt="LinkedIn Icon">
				LinkedIn
			</a>
		</p> 
		<p>or shoot me an email at <a href="mailto:jacovancr@gmail.com">jacovancr@gmail.com</a></p>
		<h2>This site</h2>
		<p>
			This site is hosted in a decentralized fashion by being a static site and utilising IPFS (InterPlanetary File System - great name) for hosting without the need for a single, centralized service.
			The only remaining challenge is the domain name which is currently centralized using a regular domain registrar (but i'm looking into using something like <a href="https://ens.domains/" target="_blank">Eth DNS</a> for this part soon). The lack of a proper web server also means that I have to handle http to https redirects via Javascript rather than configuring this on the web server.
		</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			profileImage: "@/assets/me.jpg",
			urlCV: process.env.BASE_URL + "jaco-van-cranenburgh-CV.pdf" // TODO: Make this global/stored in one place
		}
	},
	created () {
		document.title = "Jaco van Cranenburgh";
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