import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import {router} from "./routes";
import {store} from "./store/store";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
