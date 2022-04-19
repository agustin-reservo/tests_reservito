import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Home from "./components/Home.vue";

Vue.use(VueCookies)

const app = new Vue({
  el: '#app',
  components: {
    Home,
  }
})
