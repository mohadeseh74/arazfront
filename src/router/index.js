import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Gallery from '@/pages/Gallery'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Service from '@/pages/Service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})
