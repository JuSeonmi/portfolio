<<template>
  <Layout>
    <div class="container">
      	<Hero />
		<About />
	  	<particles />
    </div>
  </Layout>
</template>
<script>
import Hero from "@/components/Hero"
import About from "@/components/About"
import particles from "@/components/particles"

export default {
  components: {
    Hero,
    About,
	particles
  }
}
</script>

