<template>
	<article>
		<ul>
			<li v-for="(post, index) in posts" ref="post" :key="index" :index="index">
				{{ post.title }}
			</li>
		</ul>
		<nuxt-content :document="page" />
	</article>
</template>

<script>
// Databse
import axios from 'axios'
const database = 'https://www.theme-bones.com/wp-json/wp/v2/posts'

export default {

	/*
	async asyncData ({ $content }) {
		const page = await $content('example').fetch()

		return {
			page
		}
	},
	*/

	data () {
		return {
			posts: []
		}
	},

	getPosts () {
		axios
			.get(database)
			.then((res) => {
				this.posts = res.data
			})
			.catch((error) => {
				console.log(error)
			})
	},

	created () {
		this.getPosts()
	}
}
</script>

<style lang="scss">
body {
	//background: red;
}
</style>
