import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/routeNames'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.Layout,
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: ROUTE_NAMES.Home,
          component: () => import('@/pages/HomePage/HomePage.vue'),
          meta: {
            breadcrumb: [{ title: 'Статистика', name: '/', isLink: true }],
          },
        },
        {
          path: '/pages/users',
          name: ROUTE_NAMES.Users,
          component: () => import('@/pages/Users/UsersPage.vue'),
          meta: {
            breadcrumb: [
              { title: 'Страницы / ', name: '/', isLink: false },
              { title: 'Пользователи', name: ROUTE_NAMES.Users, isLink: true },
            ],
          },
        },
        {
          path: '/pages/events',
          name: ROUTE_NAMES.Events,
          component: () => import('@/pages/EventsPage/EventsPage.vue'),
          meta: {
            breadcrumb: [
              { title: 'Страницы / ', name: '/', isLink: false },
              { title: 'Действия', name: ROUTE_NAMES.Events, isLink: true },
            ],
          },
        },
        {
          path: '/controller',
          name: ROUTE_NAMES.Controller,
          component: () => import('@/pages/ControllerPage/ControllerPage.vue'),
          meta: {
            breadcrumb: [{ title: 'Контроллер', name: '/', isLink: true }],
          },
        },
      ],
    },
    {
      path: '/',
      name: 'GuestLayout',
      component: () => import('@/layouts/GuestLayout.vue'),
      children: [
        {
          path: '/sign-in',
          name: ROUTE_NAMES.LoginPage,
          component: () => import('@/pages/LoginPage/LoginPage.vue'),
        },
      ],
    },
  ],
})

export default router
