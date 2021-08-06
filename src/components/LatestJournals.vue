<template>
	<div class="projects">
		<Edit3Icon />
		<h2>Posts</h2>
		<div class="projects_inner">
			<div class="project" v-for="item in journals" :key="item.node.id">
				<a :href="item.node.link" target="_blank">
					<h3 class="journal-title">{{ item.node.title }}</h3>
					<p class="date">{{ item.node.date }}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { Edit3Icon } from 'vue-feather-icons'
export default {
	props: {
		journals: {
			type: Array,
			required: true
		}
	},

	components: {
		Edit3Icon
	}
}
</script>

<style scoped>
.project {
	font-size: 14px;
	justify-content: center;
	text-align: center;
}

.project a {
	text-decoration: none;
}

.date {
	font-size: 12px;
	margin-top: 10px;
}
</style>
