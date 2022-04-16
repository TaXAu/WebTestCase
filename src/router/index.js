import { createRouter, createWebHashHistory } from 'vue-router'
import Test1View from '../views/Test1View.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/test1',
    name: 'test1',
    component: Test1View
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
