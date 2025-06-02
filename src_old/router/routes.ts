import Maintenance from '../views/Maintenance.vue'
export const routes = [
  {
    path: '/',
    name: 'maintenance',
    component: Maintenance
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
]
