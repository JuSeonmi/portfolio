<template>
    <div class="projects">
		<LayersIcon class="icon_heading"/>
		<h2>Projects</h2>
		<div class="projects_inner">
			<div class="project" v-for="(item,index) in projects" v-if="index <= 5" :key="item.node.id" >
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
		
		<!-- <button v-on:click="toggleOnOff">viewall <ChevronRightIcon /></button>
		 -->
		<a href="all" class="btn_viewall">viewall <ChevronRightIcon /></a>
		
		
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

	data() {
        return {
            statusOn: false
        };
	},
	methods: {
      toggleOnOff: function() {
			this.statusOn = !this.statusOn;
			console.log(this.statusOn);
		}
    }
}
</script>

