/**
 * Created by gdshen on 1/3/17.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Item from '../views/Item';
import List from '../views/List';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/foo', component: Item },
    { path: '/bar', component: List },
  ],
});
