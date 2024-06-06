/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: DashboardHome,
      },
      {
        path: 'users',
        name: 'UserManagement',
        component: UserManagement,
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

export default router
