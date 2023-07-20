import { createRouter, createWebHistory } from 'vue-router'


import Countprice from '../views/Countprice.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/countprice',
      name: 'countprice',
      component: Countprice
    },
    
    
    
   
  ]
})

export default router
