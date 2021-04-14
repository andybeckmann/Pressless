<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--breadcrumbs">
			<router-link to="/blog">Blog</router-link> / {{ post.title.rendered }}
		</div>
		<h1>{{ post.title.rendered }}</h1>
		<section v-html="post.content.rendered"></section>
		<router-link to="/blog">Back to blog</router-link>
		<AppFooter />
	</div>
</template>

<script>
export default {
	computed: {
		posts () {
			return this.$store.state.posts
		},
		post () {
			return this.posts.find(el => el.slug === this.slug)
		}
	},
	data () {
		return {
			slug: this.$route.params.slug
		}
	},
	created () {
		this.$store.dispatch('getPosts')
	}
}
</script>

<style lang="scss">

</style>
