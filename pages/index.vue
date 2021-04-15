<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--body-intro">
			<p><span>WordPress</span> data rendered with <span>Vue</span> using <span>Nuxt</span></p>
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
	}
}
</script>

<style lang="scss">
.app--body-intro {
	p {
		font-size: 75px;
		line-height: 150px;
		font-weight: normal;
		max-width: 960px;
		margin: 10vh auto;
	}

	span {
		padding: 15px 25px;
		border-radius: 10px;
		font-weight: bold;
		&:nth-of-type(1) {
			background: linear-gradient(70deg, #0073aa, transparent);
		}
		&:nth-of-type(2) {
			background: linear-gradient(70deg, #1cce8c, transparent);
		}
		&:nth-of-type(3) {
			background: linear-gradient(70deg, #097873, transparent);
		}
	}
}
</style>
