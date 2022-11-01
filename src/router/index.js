import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Dar from '../components/Dar.vue'
import Nosotros from '../components/Nosotros.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/dar',
    name: 'Dar',
    component: Dar
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
]

const router = new VueRouter({
  routes
})

export default router
