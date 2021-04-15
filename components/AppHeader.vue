<template>
	<div class="app--header">
		<AppLogo />
		<AppNavigation />
	</div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import AppNavigation from '@/components/AppNavigation.vue'

export default {
	components: {
		AppLogo, AppNavigation
	}
}
</script>

<style lang="scss">
.app--header {
	display: flex;
}
</style>
