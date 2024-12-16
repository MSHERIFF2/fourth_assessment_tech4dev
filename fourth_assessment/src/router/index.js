import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import SingleProduct from '../components/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: SingleProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router