<template>
	<div class="inner-wrapper portfolio">
		<h1>Portfolio</h1>
		<WebsiteDisplay v-for="Item in PortfolioItems" :key="Item.id" :Item="Item"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import WebsiteDisplay from "@/components/WebsiteDisplay.vue";

	export default {
		name: "Home",
		data() {
			return {
				PortfolioItems: [
					{
						id: 0,
						name: "Example",
						image: "/portfolio/example.png",
						text: "Test text here ... Test text here ... Test text here ... Test text here ... Test text here ... Test text here ... Test text here ... "
					}
				]
			}
		},
		components: {
			WebsiteDisplay
		},
		created() {
			document.title = "Portfolio - Jaco van Cranenburgh";
		}
	};
</script>
