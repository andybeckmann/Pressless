<template>
	<div class="app--logo">
		<h1>Pressless</h1>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app--logo {
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		display: block;
	}

	h1 {
		font-size: 54px;
		display: inline-block;
		padding: 15px 25px;
		border-radius: 10px;
		color: #111;
		border: 5px solid #111;
	}
}
</style>
