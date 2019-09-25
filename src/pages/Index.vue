<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
	  <LatestJournals :journals="$page.journals.edges" />
	  <Skills />
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
        thumbnail (quality: 90)
        path
      }
    }
  },
   journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
		author
		link
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"
import Skills from "@/components/Skills"

export default {
  components: {
    Hero,
    ProjectsGrid,
	LatestJournals,
	Skills
  }
}
</script>
