import store from "src/store/index.js"

/* 第三方库+插件 */
import "static/iconfont/iconfont.css";

/* #ifndef MP-WEIXIN */
import "amfe-flexible" // rem+flex
/* #endif */

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
