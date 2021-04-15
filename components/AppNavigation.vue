<template>
	<div class="app--navigation">
		<ul>
			<li>
				<router-link to="/">
					Home
				</router-link>
			</li>
			<li>
				<router-link to="/blog">
					Blog
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app--navigation {
	width: 100%;

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		justify-content: right;
		align-items: right;
		place-content: flex-end;
		padding: 65px 0;

		li {
			a {
				text-decoration: none;
				color: #111;
				font-size: 20px;
				margin: 15px 0 15px 45px;
			}
		}
	}
}
</style>
