<template>
	<div id="header">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		title: {
			type: String,
			default: '喵喵电影'
		}
	},
	data() {
		return {};
	},

	methods: {}
};
</script>
<
<style scoped>
#header {
	width: 100%;
	height: 50px;
	color: #fff;
	background: #e54847;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	line-height: 50px;
}
#header h1 {
font-size: 18px;
text-align: center;

}

</style>
