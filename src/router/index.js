import Vue from 'vue';
import Router from 'vue-router';
import Content from '@/components/Content';
import Templates from '@/components/Templates';
import Reference from '@/components/Reference';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content,
    }, {
      path: '/templates',
      name: 'Templates',
      component: Templates,
    }, {
      path: '/reference',
      name: 'Reference',
      component: Reference,
    },
  ],
  mode: 'history',
});
