<template>
	<ul>
		<li v-for="(post, index) in posts" ref="post" :key="index" :index="index">
			<h1>{{ post.title.rendered }}</h1>
			<div v-html="post.content.rendered"></div>
		</li>
	</ul>
</template>

<script>
// Databse
import axios from 'axios'
const database = 'https://www.theme-bones.com/wp-json/wp/v2/posts'

export default {

	data () {
		return {
			posts: []
		}
	},

	created () {
		this.getPosts()
	},

	methods: {

		getPosts () {
			axios
				.get(database)
				.then((res) => {
					this.posts = res.data
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}
}
</script>

<style lang="scss">

</style>
