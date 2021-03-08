<template>
	<div class="inner-wrapper blog">
		<h1>Writing</h1>
		<div class="content">
			<p>I occasionally write about Bitcoin, language-learning and anything else that interests me. </p>
			<p>This is mostly an exercise to improve my written skills and ability to express myself, while also giving me a platform to talk about things that people seem to roll their eyes at when I bring them up at parties 🤷. But if you're interested you can find these below.</p>
		</div>
		<div class="blog-items">
			<BlogItem v-for="BlogPost in BlogItems" :key="BlogPost.id" :BlogPost="BlogPost"/>
		</div>
	</div>
</template>

<script>
	import BlogItem from '@/components/BlogItem.vue'

	export default {
		name: 'Blog',
		components: {
			BlogItem,
		},
		data() {
			return {
				BlogItems: [
					{
						id: 0,
						title: "Why and how you should learn to touch-type",
						platform: "Medium",
						date: "3rd January 2021",
						description: "The process of learning to touch type correctly after years of being a 'hunt and peck'-er.",
						link: "https://jacovan.medium.com/why-and-how-you-should-learn-to-touch-type-81633be92504"
					},
					{
						id: 1,
						title: "Why you shouldn't buy Bitcoin",
						platform: "Medium",
						date: "4th January 2021",
						description: "My experience with the Bitcoin 'hype-cycle', the importance of due-diligence and avoiding convictionless investments.",
						link: "https://jacovan.medium.com/why-you-shouldnt-buy-bitcoin-e42cd96a02"
					},
					{
						id: 2,
						title: "Duolingo, what is it good for?",
						platform: "Medium",
						date: "10th January 2021",
						description: "Some of my thoughts on app-based language learning and why they are useful.",
						link: "https://jacovan.medium.com/duolingo-what-is-it-good-for-e5e5d25c3009"
					},
				].sort(function(a, b) {
					return (b.id) - (a.id);
				})
			}
		},
		created () {
			document.title = "Blog - Jaco van Cranenburgh";
		}
	}
</script>