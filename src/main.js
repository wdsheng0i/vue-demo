// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
import FastClick from 'fastclick'
import VueI18n from 'vue-i18n'
import VueLocales from './i18n/locale'

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})
Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.lang = 'en'
// set locales
Object.keys(VueLocales).forEach(function (lang) {
  console.log('Listening at ' + lang + '\n')
  Vue.locale(lang, VueLocales[lang])
})

const router = new VueRouter({routes: routerConfig})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
