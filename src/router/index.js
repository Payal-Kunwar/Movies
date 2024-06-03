// import { createRouter, createWebHistory } from 'vue-router'

// export default createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//         name: 'main',
//         path: '/',
//         component: () => import('@/components/Register.vue')
//     },   
//     {
//       name: 'weatherapp',
//       path: '/weatherapp/:name',
//       component: () => import('@/components/WeatherApp.vue')
//     },
//     {
//         name: 'movies',
//         path: '/movies',
//         component: () => import('@/components/Movies.vue')
//     },
//     {
//         name: 'moviepage',
//         path: '/movies/:id',
//         component: () => import('@/components/MoviePage.vue')
//     }
//   ]
// })


import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/movies',
      component: () => import('@/components/Movies.vue')
    },
    {
      name: 'moviepage',
      path: '/movies/:id',
      component: () => import('@/components/MoviePage.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/components/Movies.vue')
    }
  ]
})