<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--intro">
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

</style>
