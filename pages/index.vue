<template>
	<div class="app--main">
		<AppHeader />
		<div class="app--body">
			<p>WordPress data rendered with Vue using Nuxt</p>
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
