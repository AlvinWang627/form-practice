import Vue from 'vue';
import App from './App.vue';
import VueFormulate from '@braid/vue-formulate';
// import { cn } from '@braid/vue-formulate-i18n';

Vue.config.productionTip = false;
Vue.use(VueFormulate, {
  // plugins: [cn],
  // locale: 'cn',
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
