import VueRouter from 'vue-router';
import TriviaApp from './components/TriviaApp'

const routes = [
  { path: '*', redirect: '/'},
  { path: '/', name: 'home', component: TriviaApp},
];

export const router = new VueRouter({
  mode: 'history',
  routes
});