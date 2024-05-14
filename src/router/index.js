import { createRouter, createWebHistory } from 'vue-router';

console.log(9981811);
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home/:name',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/about/index.vue'),
    },
  ],
});
