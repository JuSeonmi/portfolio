<template>
	<div class="projects">
		<LayersIcon />
		<h2>Projects</h2>
		<div class="projects_inner">
			<div class="project" v-for="(item,index) in projects" :key="item.node.id">
				<g-link :href="item.node.link" target="_blank" class="project-link">
					<div class="logo_wrap">
						<g-image :src="item.node.logo" class="logo" />
	
					</div>
					<div class="categories">
						<h3 class="project-title">{{ item.node.title }}</h3>
						<p class="dates">
							<span class="date" v-for="(item, index) in item.node.date" :key="index">{{ item }}</span>
						</p>
	
						<span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span><br>
					</div>
				</g-link>
			</div>
	
		</div>
		<a href="/" class="btn_viewall">
			<ChevronLeftIcon /> prev</a>
	
	
	</div>
</template>


<script>
import { LayersIcon, ChevronRightIcon, ChevronLeftIcon } from 'vue-feather-icons'
export default {
	props: {
		projects: {
			type: Array,
			required: true
		}
	},

	components: {
		LayersIcon,
		ChevronRightIcon,
		ChevronLeftIcon
	},
}
</script>

<style scoped>
.projects_inner {
	margin-top: 20px;
	grid-template-columns: 1fr;
	grid-gap: 0;
}

.project {
	padding: 10px 20px;
}
</style>
