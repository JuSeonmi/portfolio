<template>
    <div class="projects">
		<LayersIcon />
		<h2>Projects</h2>
		<div class="projects_inner">
			<div class="project" v-for="(item,index) in projects" :key="item.node.id" >
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
		<a href="/" class="btn_viewall">prev</a>
		
		
    </div>

</template>


<script>
import { LayersIcon, ChevronRightIcon } from 'vue-feather-icons'
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
	},
	
  	components: {
		LayersIcon,
		ChevronRightIcon
	},
}
</script>

<style scoped>
	svg {
		vertical-align: -3px;
	}
	.projects_inner {
		display: grid;
		margin-top: 20px;
		grid-template-columns: 1fr;
		
	}
	.project {
		padding: 10px;
		background-color: rgba(255, 255, 255 ,.1);
		
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
	max-width: 30px;
    max-height: 50px;
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



</style>
