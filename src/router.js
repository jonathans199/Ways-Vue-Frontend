import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Checkout from '@/views/Checkout.vue'
// import About from '@/views/About.vue'
import FAQ from '@/views/FAQ.vue'
import Locations from '@/views/Locations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/#about',
      name: 'about',
      component: []
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    }
  ]
})
