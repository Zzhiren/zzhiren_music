import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(iView);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
