<template>
    <div class="skills">
		<CpuIcon />
		<h2>Skills</h2>
		<div class="columns">
			<div v-for="skill in skills" :key="skill.topic" class="column">
				<a
					class="card">
					<div class="skill-cover" s:style="{ backgroundImage: `url(${image})` }"></div>
					<div class="skill-description">
						{{ skill.description }}
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { CpuIcon } from 'vue-feather-icons'
export default {

	components: {
		CpuIcon
	},

	props: {
		skills: {
		 type: Array,
		required: true
		}
	},

	computed: {
		image() {
		return (
			this.skill.image ||
				`https://cdn.jsdelivr.net/gh/github/explore/topics/${this.skill.topic}/${this.skill.topic}.png`
			)
		}
	}
}
</script>

<style scoped>
.projects_inner {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.project {
  /* grid-column: auto / span 2; */
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 200px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 1rem 0 .2rem 0;
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
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 900px) {
  /* .project {
    grid-column: auto / span 1;
  } */
  /* .project:nth-child(3n+1) {
    grid-column: auto / span 2;
  } */

 .projects_inner {
	grid-template-columns: 1fr 1fr;
  }
}

</style>
