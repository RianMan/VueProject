// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import "./assets/css/mui.min.css"
Vue.config.productionTip = false

Vue.use(MintUI)
/* eslint-disable no-new */

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import store from "./components/store/store" 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
