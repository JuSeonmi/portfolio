import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue'
import VueParticles from 'vue-particles'
import "@/assets/code-highlight.css"


Vue.use(VueParticles)
        
export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };


}

