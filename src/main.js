// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
import axios from 'axios'
import waterfall from 'vue-waterfall2'
import store from './store/store.js'


Vue.use(waterfall)
Vue.prototype.axios=axios
Vue.use(wcSwiper)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
