<template>
	<a v-if="Item" :href="Item.link" class="blog-item" target="_blank">
		<img :src="require('@/assets' + Item.image + '')">
		<h2 class="title">{{ Item.name }}</h2>
		<div class="description">
			{{ Item.text }}
		</div>
	</a>
</template>

<script>
export default {
	name: "WebsiteDisplay",
		props: {
			Item: {
				type: Object,
				required: true
			}
		},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
