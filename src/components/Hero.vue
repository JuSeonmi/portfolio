<template>
    <div class="hero">
		<div class="hero-photo" v-html="settings.hero_photo" />
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>
.hero {
    grid-row: span 3;
    width: 400px;
    padding: 4rem 0 1rem 0;
}

.hero-title {
    font-size: 2rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
.hero-photo {
	width: 200px;
	height: 200px;
	background-image: url(http://newhippy.cafe24.com/portfolio/images/widthGM.jpg);
	background-size: cover;
	background-position: center center;
	border-radius: 10px;
}
</style>
