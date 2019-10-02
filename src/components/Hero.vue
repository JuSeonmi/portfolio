<template>
    <div class="hero">
		<planet class="star" />
		<div class="hero-photo" v-html="settings.hero_photo" />
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />

		<nav class="nav">
			<a href="#" class="nav_item is-active">
				<CornerDownRightIcon class="icon" /> Home 
			</a>
			<a href="/contact" class="nav_item">
				<CornerDownRightIcon class="icon" /> Profile
			</a>
		</nav>
<!-- 	
		<div class="contact_info">
			<p>대한민국, 서울특별시</p>	
			<p><PhoneIcon class="icon" /> 010-7527-1589</p>
			<p><MailIcon class="icon" /> wntjsal19@gmail.com</p>
		</div> -->
	</div>
</template>

<script>
import planet from '../assets/svgs/planet.svg'
import { CornerDownRightIcon, MailIcon, PhoneIcon } from 'vue-feather-icons'
export default {
	data() {
		return {
		settings: require("../../data/theme.json")
		}
	},
 
	components: {
		planet,
		MailIcon,
		PhoneIcon,
		CornerDownRightIcon
	},

}

</script>

<style>
.hero {
    grid-row: span 3;
    padding: 4rem 0 1rem 0;
}


@keyframes sparkle {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
.star {
	position: absolute;
    top: 10px;
    left: -47px;
    width: 380px;
	animation: sparkle 1.6s infinite ease-in-out alternate;
}

.hero-title {
    font-size: 2rem;
    font-weight: 700;
    padding: 0;
    margin: 1rem 0 .5rem;
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
.nav {
	margin: 20px 0;
}
.nav_item {
	display: block;
	padding: 3px 0;
	font-size: 16px;
	color: rgb(102, 102, 102);
}

.nav_item.is-active {
	color: #fff;
}

.nav_item .icon {
	width: 1rem;
    height: 1rem;
}

.contact_info {
	margin-top: 20px;
	font-size: 12px;
}

.contact_info .icon {
	width: 12px;
	height: 12px;
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
