<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--body-breadcrumbs">
			<router-link to="/">Pressless</router-link> / <router-link to="/blog">Blog</router-link> / {{ post.title.rendered }}
		</div>
		<div class="app--body-post">
			<h1>{{ post.title.rendered }}</h1>
			<section v-html="post.content.rendered"></section>
		</div>
		<div class="app--body-links">
			<router-link to="/blog" class="button">← Back to blog</router-link>
		</div>
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
.app--body-breadcrumbs {
	font-size: 14px;
	color: #999;
}
.app--body-post {
	max-width: 960px;
	margin: 0 auto;
}
.app--body-links {
	display: flex;
	justify-content: center;
}
</style>
