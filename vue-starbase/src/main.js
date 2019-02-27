import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Data from './components/Data';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [{ path: '/data/:type', component: Data }];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
