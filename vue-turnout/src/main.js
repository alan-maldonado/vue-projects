import Vue from 'vue';
import App from './components/App';
import VueRouter from 'vue-router';
import store from './store';
import { firebaseApp } from './firebase';

Vue.use(VueRouter);

import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
