<template>
	<div class="app--navigation">
		<ul>
			<li>
				<router-link to="/">
					Home
				</router-link>
			</li>
			<li>
				<router-link to="/about">
					About
				</router-link>
			</li>
			<li>
				<router-link to="/blog">
					Blog
				</router-link>
			</li>
			<li>
				<router-link to="/contact">
					Contact
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
		padding: 65px 0;
		text-align: center;

		@media (min-width: 768px) {
			display: flex;
			justify-content: right;
			align-items: right;
			place-content: flex-end;
			text-align: left;
		}

		li {
			a {
				text-decoration: none;
				color: #111;
				font-size: 20px;
				margin: 15px 0;
				padding: 5px 0;
				display: block;

				@media (min-width: 768px) {
					display: block;
					margin: 15px 0 15px 45px;
				}

				&.nuxt-link-exact-active {
					font-weight: bold;
					border-bottom: 4px solid #ccc;
				}
			}
		}
	}
}
</style>
