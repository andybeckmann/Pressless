<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--body">
			<div class="app--body-posts">
				<ul>
					<li v-for="(post, index) in posts" ref="post" :key="post.id" :index="index">
						<h2>
							<a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
						</h2>
						<div v-html="post.excerpt.rendered"></div>
						<a :href="`blog/${post.slug}`" class="button-read-more">Read more</a>
					</li>
				</ul>
			</div>
		</div>
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
	components: {
		AppHeader, AppFooter
	},
	computed: {
		posts () {
			return this.$store.state.posts
		}
	},
	created () {
		this.$store.dispatch('getPosts')
	}
}
</script>

<style lang="scss">

</style>
