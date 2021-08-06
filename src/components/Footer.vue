<template>
	<footer class="footer">
		<div class="container">
			<span v-html="settings.footer" />
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			settings: require("../../data/theme.json")
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	font-size: 0.8rem;
}
</style>
