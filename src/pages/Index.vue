<template>
  <Layout>
    <div class="container">
	
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
	  <Skills />
	  <LatestJournals :journals="$page.journals.edges" />
	  <particles />
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
  },
   journals: allJournalPost (perPage: 4) {
    edges {
      node {
		date (format: "YYYY. MM")
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
import particles from "@/components/particles"

export default {
  components: {
    Hero,
    ProjectsGrid,
	LatestJournals,
	Skills,
	particles
  }
}

</script>
