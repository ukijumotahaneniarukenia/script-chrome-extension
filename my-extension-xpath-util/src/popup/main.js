import Vue from 'vue'
import App from './App.vue'

import Vuetify from "vuetify";

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App)
})
