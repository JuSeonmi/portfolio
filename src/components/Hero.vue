<template>
    <div class="hero">
		<div class="hero-photo" v-html="settings.hero_photo" />
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
		<span class="spin">:)</span>

		
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
    padding: 4rem 0 1rem 0;
}

.hero-title {
    font-size: 2rem;
    font-weight: 700;
    padding: 0;
    margin: 1rem 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
	display: inline-block;
    font-size: 1em;
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
	border-radius: 100%;
	animation: hover 2s infinite ease-in-out alternate;
}
.spin {
	display: inline-block;
	vertical-align: middle;
	margin-left: 5px;
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
	color: #ffc000;
    font-size: 20px;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes hover {
  0% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
}

</style>
