import { createRouter, createWebHistory } from 'vue-router'
import All from '../views/All.vue'
import Client from '../views/Client.vue'
import Admin from '../views/Admin.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },  
    {
      path: '/client',
      name: 'client',
      component: Client
    },    
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },  
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard
    },  
  ]
})

export default router
