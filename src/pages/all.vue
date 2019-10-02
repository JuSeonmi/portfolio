<template>
  <Layout>
    <div class="container">
      <Hero />
	  <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>


<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date 
		link
        title
        categories
		logo
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsAll"

export default {
	components: {
		Hero,
		ProjectsGrid
	}
}
</script>