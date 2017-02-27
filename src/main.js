import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'font-awesome-webpack'

var router = new VueRouter({ mode: 'history' })

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#app',
  template: '<app/>',
  data: function () {
    return {}
  },
  components: {
    App
  }
})
