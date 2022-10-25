
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import {$http} from '@escook/request-miniprogram'
// 设置请求基地址  
$http.baseUrl="https://api.it120.cc"
// 请求拦截器  显示loading提示
$http.beforeRequest=function(){
	uni.showLoading({
		title:"加载中..."
	})
}
// 响应拦截器  结束loading提示
$http.afterRequest=function(){
	uni.hideLoading()
}
// 在全局uni对象上挂载$http
uni.$http=$http

// 封装一个showMsg提示方法
uni.$showMsg=function(title='数据请求失败',duration=1500){
	uni.showToast({
		title,
		duration
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif