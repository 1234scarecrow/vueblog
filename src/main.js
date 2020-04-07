import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
new Vue({
  'el': '#article'
})

/** 加载全局样式文件 */
import "./assets/css/common.css"

/** 项目的运行配置 */
Vue.config.productionTip = false

/** axios配置 */
axios.defaults.baseURL = 'http://192.168.31.200:8081'  // 本地服务器连接
// axios.defaults.baseURL = 'http://45.76.151.126:8081'
axios.defaults.withCredentials = true  // Axios每次请求都携带身份认证信息 connect.sid
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'  // 修改所有的post请求默认头部
Vue.prototype.$http = axios  // 把axios工具声明为Vue的实例的自定义成员
// 工具函数: 把Object序列转为k=val&k=val...的形式
Vue.prototype.$serialize = function (dataObj) {
  let arr = []
  for (let p in dataObj) {
    let key = encodeURIComponent(p)
    let val = encodeURIComponent(dataObj[p])
    arr.push(key + '=' + val)
  }
  return arr.join('&')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
