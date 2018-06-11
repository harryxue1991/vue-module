import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import * as filters from './filters' // global filters
import * as directives from './directive' // global directives

import App from './App'
import router from './router'
import store from './store'
import api from './api/index'

import '@/icons' // icon
import '@/permission' // permission control

import { post, get } from '@/api/http'
Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.use(ElementUI, { locale })
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global utility directive.
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false
// register global API
Vue.prototype.api = api

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
