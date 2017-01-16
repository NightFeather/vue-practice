import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'font-awesome-webpack'

Vue.use(VueRouter)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<app/>',
  data: function () {
    return {}
  },
  components: {
    App
  }
})
