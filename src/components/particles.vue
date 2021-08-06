<template>
	<vue-particles color="#dedede" :particleOpacity="0.6" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="0" :lineLinked="false" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab"
	    :clickEffect="true" clickMode="push">
	</vue-particles>
</template>

<style scoped>
#particles-js {
	position: fixed !important;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	opacity: .5;
}
</style>