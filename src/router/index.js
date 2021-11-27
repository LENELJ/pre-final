import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Coupon from '../views/Coupon.vue'

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/cart',name: 'Cart',component: Cart},
  {path: '/cpn',name: 'Coupon',component: Coupon}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
