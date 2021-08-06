<template>
	<div class="layout">
	
		<slot/>
		<Footer />
	</div>
</template>

<script>
import Footer from "@/components/Footer"

export default {
	components: {
		Footer
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
}

body {
	--color-base: rgb(255, 255, 255);
	--color-base-1: rgb(243, 243, 243);
	--color-contrast: rgb(0, 0, 0);
	--color-contrast-1: rgb(43, 43, 43);
	font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	margin: 0;
	padding: 0;
	font-size: 16px;
	background: #000;
	color: #fff;
	transition: background 0.5s ease;
}

body.dark {
	--color-base: rgb(20, 20, 20);
	--color-base-1: rgb(43, 43, 43);
	--color-contrast: rgb(255, 255, 255);
	--color-contrast-1: rgb(243, 243, 243);
}

h1 {
	letter-spacing: -0.01em;
}

h2 {
	display: inline-block;
	margin-left: 5px;
}

.layout {
	padding: 0;
}

.layout.sticky-header {
	padding: 6rem 0 0 0;
}

.container {
	display: grid;
	grid-template-columns: 1fr;
	margin: 0 auto;
	padding: 3rem;
}

.container:before {
	width: 100%;
	height: 100%;
}

@media (max-width: 768px) {
	.container {
		padding: 3rem 1.5rem;
	}
	.hero+.projects {
		margin-top: 30px;
		padding-top: 20px;
		border-top: 1px solid #4e4e4e;
	}
}

@media (min-width: 768px) {
	.container {
		grid-template-columns: 300px 1fr;
	}
}

a {
	color: inherit;
}

img {
	max-width: 100%;
}

.label {
	display: block;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.icon_heading {
	vertical-align: -3px;
}

.feather-chevron-right {
	vertical-align: top;
}

.btn_viewall {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 10px;
}

.projects {
	margin-top: 50px;
	.hero+& {
		margin-top: 0;
	}
}

.projects_inner {
	display: grid;
	margin-top: 20px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1rem;
}

.project {
	display: flex;
	align-items: center;
	padding: 20px;
	background-color: rgba(255, 255, 255, .1);
}

.project:hover {
	border: 1px solid #333;
	margin: -1px;
}

.project-link {
	display: flex;
	align-items: center;
	text-decoration: none;
}

.logo_wrap {
	margin-right: 20px;
}

.logo {
	display: inline-block;
	max-width: 52px;
	max-height: 52px;
	border-radius: 3px;
}

.project-title {
	font-size: 1rem;
	color: var(--color-contrast);
}

.categories {
	font-size: 0.8rem;
	color: var(--color-contrast-1);
}

.category {
	margin-right: 0.8rem;
}

.category:last-of-type {
	margin: 0;
}

@media (min-width: 900px) {
	.projects_inner {
		grid-gap: 1.5rem;
	}
}

@media (max-width: 768px) {
	.hero+.projects {
		margin-top: 30px;
	}
}
</style>
