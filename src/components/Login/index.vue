<template>
	<div class="login_body">
		<div><input type="text" class="login_text" placeholder="账户名/手机号/Email" /></div>
		<div><input type="password" class="login_text" placeholder="请输入您的密码" /></div>
		<div class="login_btn"><input type="submit" value="登陆" /></div>
		<div class="login_link">
			<a href="#">立即注册</a>
			<a href="#">找回密码</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	created() {
		this.getuserinfo();
	},
	methods: {
		getuserinfo() {
			this.axios.get('http://localhost:3000/api/userinfo').then(res => {
				console.log(res);
			});
		}
	}
};
</script>
<style scoped>
.login_body {
	margin-top: 60px;
	width: 100%;
}
.login_body .login_text {
	width: 100%;
	height: 40px;
	border: none;
	border-bottom: 1px #ccc solid;
	margin-bottom: 5px;
	outline: none;
	text-indent: 10px;
}
.login_body .login_btn {
	height: 50px;
	margin: 10px;
}
.login_body .login_btn input {
	width: 100%;
	height: 100%;
	background: #e54847;
	border-radius: 3px;
	border: none;
	display: block;
	color: white;
	font-size: 20px;
}
.login_body .login_link {
	display: flex;
	justify-content: space-between;
}
.login_body .login_link a {
	text-decoration: none;
	margin: 0 5px;
	font-size: 12px;
	color: #e54847;
}
</style>
