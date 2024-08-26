import { createRouter, createWebHistory } from 'vue-router';

// Import views from the correct path
import HomePage from '../views/HomePage.vue';
import CheckOut from '../views/CheckOut.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/checkout', name: 'CheckOut', component: CheckOut },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
