import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import EmailView from '../views/EmailView.vue';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/email',
    component: EmailView,
    children: [
        {
            path: '/',
            component: HomeView
          }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
