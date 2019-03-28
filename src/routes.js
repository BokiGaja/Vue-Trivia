import VueRouter from 'vue-router';
import TriviaApp from './components/TriviaApp'
import AppChuck from './components/AppChuck'

const routes = [
  {path: '*', redirect: '/'},
  {path: '/', name: 'home', component: TriviaApp},
  {path: '/chuck', name: 'chuck', component: AppChuck},
];

export const router = new VueRouter({
  mode: 'history',
  routes
});