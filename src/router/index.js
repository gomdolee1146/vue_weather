import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/mainView';
import DetailView from '../views/detailView';

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    component: MainView,
    name: 'main',
  },
  {
    path: '/detail/:city',
    component: DetailView,
    name: 'detail',
  },
];
const scrollBehavior = () => {
  return { top: 0 };
};

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export { router };
