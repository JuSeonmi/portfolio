<template>
    <div class="posts">
		<Edit3Icon />
       	<h2>Posts</h2>
        <div class="latest-journals">
			<div class="journal" v-for="item in journals" :key="item.node.id">
			<a :href="item.node.link" target="_blank">
			<h3 class="journal-title">{{ item.node.title }}</h3>
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
.posts {
	margin-top: 50px;
}
.latest-journals {
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal {
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 100px;
  transition: background 0.25s ease;
  text-decoration: none;
  background-color: #141414;
  text-align: center;
}

.journal:hover {
  background: var(--color-base-1);
}

.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}

@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }

 


}

@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }


}

</style>
