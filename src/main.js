import Vue from 'vue'
import App from './App.vue'
// import store from "./store"

// 初始化时，请求数据
// store.dispatch("reqData");

new Vue({
  // store,
  render: h => h(App),
}).$mount('#app')
