import { createRouter, createWebHistory } from 'vue-router'
import All from '../views/All.vue'
import Client from '../views/Client.vue'
import Admin from '../views/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import Clientes from '../views/Clientes.vue' 
import Cortes from '../views/Cortes.vue' 
import Relatorio from '../views/Relatorios.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'all',
    //   component: All
    // },  
    {
      path: '/client',
      name: 'client',
      component: Client
    },    
    {
      path: '/',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: ':id', 
          name: 'dashboard',
          component: Dashboard,
          props: true,
        },
        {
          path: ':id', 
          name: 'cliente',
          component: Clientes,
          props: true,
        },
        {
          path: ':id', 
          name: 'corte',
          component: Cortes,
          props: true,
        },
        {
          path: ':id', 
          name: 'relatorio',
          component: Relatorio,
          props: true,
        },
      ]
    },  
  ]
})

export default router;
