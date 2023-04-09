import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/routeNames'

// TODO: УБрать breadcrumbs
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
          name: ROUTE_NAMES.HomePage,
          component: () => import('@/pages/HomePage/HomePage.vue'),
          meta: {
            breadcrumb: [{ title: 'Статистика', name: '/', isLink: true }],
          },
        },
        {
          path: '/pages/users',
          name: ROUTE_NAMES.UsersPage,
          component: () => import('@/pages/Users/UsersPage.vue'),
          meta: {
            breadcrumb: [{ title: 'Пользователи', name: '/', isLink: false }],
          },
        },
        {
          path: '/pages/events',
          name: ROUTE_NAMES.EventsPage,
          component: () => import('@/pages/EventsPage/EventsPage.vue'),
          meta: {
            breadcrumb: [{ title: 'Действия', name: '/', isLink: false }],
          },
        },
        {
          path: '/controller',
          name: ROUTE_NAMES.ControllerPage,
          component: () => import('@/pages/ControllerPage/ControllerPage.vue'),
          meta: {
            breadcrumb: [{ title: 'Контроллер', name: '/', isLink: true }],
          },
        },
        {
          path: '/door',
          name: ROUTE_NAMES.DoorPage,
          component: () => import('@/pages/DoorPage/DoorPage.vue'),
          meta: {
            breadcrumb: [{ title: 'Статистика Двери', name: '/', isLink: true }],
          },
        },
        {
          path: '/employee/:id',
          name: ROUTE_NAMES.EmployeePage,
          component: () => import('@/pages/EmployeePage/EmployeePage.vue'),
          meta: {
            breadcrumb: [{ title: 'Профиль', name: '/', isLink: false }],
          },
        },
        {
          path: '/admins/listing',
          name: ROUTE_NAMES.AdminsListingPage,
          component: () => import('@/pages/Admins/AdminsListing/AdminsListing.vue'),
          meta: {
            breadcrumb: [{ title: 'Все администраторы', name: '/', isLink: false }],
          },
        },
        {
          path: '/admins/create',
          name: ROUTE_NAMES.AdminsCreatePage,
          component: () => import('@/pages/Admins/AdminsCreate/AdminsCreate.vue'),
          meta: {
            breadcrumb: [{ title: 'Создание администратора', name: '/', isLink: false }],
          },
        },
      ],
    },
    {
      path: '/',
      name: ROUTE_NAMES.GuestLayout,
      component: () => import('@/layouts/GuestLayout.vue'),
      children: [
        {
          path: '/sign-in',
          name: ROUTE_NAMES.LoginPage,
          component: () => import('@/pages/LoginPage/LoginPage.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      name: ROUTE_NAMES.ErrorPage,
      component: () => import('@/pages/ErrorPage/ErrorPage.vue'),
    },
  ],
})

export default router
