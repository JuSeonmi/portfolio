<template>
	<section class="projects">
		<CpuIcon />
		<h2>Skills</h2>
		<div class="skills">
	
			<div v-for="skill in skills" class="skill">
				<div class="skill-cover" :style="{ backgroundImage: `url('skills/${skill.src}')`}"></div>
				<h3 lass="skill-topic">
					{{ skill.topic }}
				</h3>
				<div class="skill-description">
					{{ skill.description }}
				</div>
			</div>
	
		</div>
	</section>
</template>

<script>
import { CpuIcon } from 'vue-feather-icons'

export default {

	components: {
		CpuIcon
	},

	data() {
		return {
			skills: [
				{ topic: 'HTML', description: 'HyperText Markup Language', src: 'html5.png' },
				{ topic: 'SASS', description: 'Syntactically Awesome Style Sheets', src: 'scsslogo.png' },
				{ topic: 'WebStandard', description: 'W3C Web Standard', src: 'w3c.png' },
				{ topic: 'JavaScript', description: 'JavaScript ECMA Script', src: 'java.png' },
			]
		}
	}
}
</script>

<style scoped>
.project_inner {
	display: flex;
}

.skills {
	margin: 20px 0 -20px -20px;
	display: flex;
	flex-wrap: wrap;
}

.skill {
	flex: 1;
	margin-left: 20px;
	margin-bottom: 20px;
	padding: 10px 10px 20px;
	background-color: rgba(255, 255, 255, .1);
	text-align: center;
}

.skill-cover {
	margin: 10px auto;
	width: 80px;
	height: 80px;
	background-size: cover;
	border-radius: 6px;
}

.skill-description {
	font-size: 12px;
}

@media (max-width: 768px) {
	.skills {
		flex-direction: column;
		margin-top: 0;
	}
	.skill {
		margin-top: 1rem;
		margin-bottom: 0;
	}
}
</style>
