<template>
    <div class="hero">
		
			<planet class="star" />
			<div class="hero-photo" v-html="settings.hero_photo" />	

			<h1 class="hero-title" v-html="settings.hero_title" />
       		 <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />	
			<nav class="nav">
				<router-link to="/" class="nav_item" :active="is-active" >
					<CornerDownRightIcon class="icon" /> Home 
				</router-link>
				<router-link to="/About" class="nav_item" :active="is-active">
					<CornerDownRightIcon class="icon" /> Profile
				</router-link>
			</nav>
		
			<div class="contact_info">
				<p class="contact_item"><PhoneIcon class="icon" /> 010-7527-1589</p>
				<p class="contact_item"><MailIcon class="icon" /> wntjsal19@gmail.com</p>
				<a class="contact_item" href="https://juseonmi.github.io/portfolio" target="_blank"><GithubIcon class="icon" /> https://juseonmi.github.io/portfolio</a>
			</div>
	</div>
</template>

<script>
import planet from '../assets/svgs/planet.svg'
import { CornerDownRightIcon, MailIcon, PhoneIcon, NavigationIcon, GithubIcon } from 'vue-feather-icons'
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
		CornerDownRightIcon,
		NavigationIcon,
		GithubIcon
	},

}

</script>

<style lang="scss">
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
	margin: 20px 0 40px;
}
.nav_item {
	display: block;
	padding: 3px 0;
	font-size: 16px;
	color: rgb(102, 102, 102);
}

.nav_item.router-link-exact-active {
	color: #fff;
}

.nav_item .icon {
	width: 1rem;
    height: 1rem;
}

.contact_info {
	
	

	font-size: 14px;
	color: rgba(255,255,255, .5);

	.contact_item {
		display: block;
		margin-top: 4px;

	}

}

.contact_info .icon {
	width: 13px;
	height: 13px;
}
@keyframes hover {
  0% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
	.hero {
		text-align: center;
		padding: 0;
	}

	.hero-photo {
		width: 100px; 
		height: 100px;
		margin: auto;
	}

	.star {
		top: 100px;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
	}

	.nav {
		margin: 10px 0 15px;
	}
}
</style>
