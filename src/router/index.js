import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Header'
import form from 'components/Form'
import Center from 'components/Center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Center',
      component: Center
    },
    {
      path: '/form',
      name: 'Form',
      component: form
    }
  ]
})
