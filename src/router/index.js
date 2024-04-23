import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/mainView';
import DetailView from '../views/detailView';

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: MainView },
  { path: '/detail', component: DetailView },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
