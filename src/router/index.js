/**
 * Created by gdshen on 1/3/17.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Table from '../views/Table';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/table', component: Table },
  ],
});
