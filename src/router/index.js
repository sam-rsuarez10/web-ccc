import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Dar from '../components/Dar.vue'
import Nosotros from '../components/Nosotros.vue'
import Ayuda from '../components/Ayuda.vue'
import Grupos from '../components/Grupos.vue'
import Formacion from '../components/Formacion.vue'
import Misiones from '../components/Misiones.vue'
import Contactanos from '../components/Contactanos.vue'


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
  {
    path: '/ayuda',
    name: 'Ayuda',
    component: Ayuda
  },
  {
    path: '/grupos',
    name: 'Grupos',
    component: Grupos
  },
  {
    path: '/formacion',
    name: 'Formacion',
    component: Formacion
  },
  {
    path: '/misiones',
    name: 'Misiones',
    component: Misiones
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: Contactanos
  }
]

const router = new VueRouter({
  routes
})

export default router
