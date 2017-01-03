// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Element from 'element-ui';
import App from './App';
import router from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Element);

// const routes = [
//   { path: '/foo', component: }
// ]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
