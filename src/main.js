import Vue from 'vue'
import 'framework7'
import Framework7Vue from 'framework7-vue'

import App from './App'
import ContactPage from './pages/contact'

Vue.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  framework7: {
    root: '#app',
    animateNavBackIcon: true,
    routes: [
      {
        path: '/contact/:name/',
        component: ContactPage
      }
    ]
  },
  components: {
    App
  },
  template: '<App/>'
})
