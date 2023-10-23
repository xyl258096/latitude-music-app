<script>
	import {
		mapActions
	} from "vuex";

	export default {
		methods: {
			// 获取当前设备信息
			...mapActions(['getPhoneInfo']),
		},
		onLaunch: function() {
			this.getPhoneInfo();
		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style lang="scss">
	/*App的公共css */
	@import url("src/common/app.css");
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	// page {
	// 	background-color: #f5f5f5;
	// }

	// /* #endif */
	// .example-info {
	// 	font-size: 14px;
	// 	color: #333;
	// 	padding: 10px;
	// }
</style>
