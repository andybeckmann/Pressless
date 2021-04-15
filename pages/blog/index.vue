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
						<a :href="`blog/${post.slug}`" class="button-read-more">Read more →</a>
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
.app--body-posts {
	max-width: 960px;
	margin: 0 auto;
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;

		li {
			margin-bottom: 50px;
		}
	}

	.button-read-more {
		background: #ddd;
		padding: 15px 25px;
		border-radius: 10px;
		margin: 5px 0 10px;
		display: inline-block;
		font-weight: bold;
	}
}
</style>
