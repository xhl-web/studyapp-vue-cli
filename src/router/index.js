//路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mynews from '../views/Mynews.vue'
import About from '../views/About.vue'
import City from '../views/City.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Mynews',
    name: 'Mynews',
    component: Mynews
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/City',
    name: 'City',
    component: City
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
