import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //vue1.0的写法
  //components: { App }

  //vue2.0的写法
  render: h => h(App)
}).$mount('#app');
