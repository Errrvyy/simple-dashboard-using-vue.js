import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'

import home from '../pages/home'
import profile from '../pages/profile'
import download from "@/pages/download.vue";
import items from "@/pages/items.vue";

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        },
        {
          name: 'download',
          path: '/download',
          component:download
        },
        {
          name: 'Items',
          path: '/items',
          component:items
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  