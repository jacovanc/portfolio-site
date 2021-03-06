<template>
	<div class="inner-wrapper portfolio">
		<h1>Portfolio</h1>
		<WebsiteDisplay/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import WebsiteDisplay from "@/components/WebsiteDisplay.vue";

	export default {
		name: "Home",
		components: {
			WebsiteDisplay
		},
	};
</script>
