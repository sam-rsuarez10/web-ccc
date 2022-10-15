import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Dar from '../components/Dar.vue'


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
]

const router = new VueRouter({
  routes
})

export default router
