/**
 * 入口文件
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index';

Vue.use(VueResource);

Vue.config.devtools = true;

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
Vue.use({ vm });
