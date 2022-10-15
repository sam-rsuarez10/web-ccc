import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  created() {
    AOS.init();
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
