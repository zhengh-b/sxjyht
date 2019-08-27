<template>
	<div id="index">
		<headers></headers>
		<div class="index-top">
			<div class="wrap">
				<ul>
					<li v-for="value in arr">
						<div class="index-top-p">
							{{value.name}}
						</div>
						<div class="index-top-e">
							{{value.en}}
						</div>
						<div class="index-top-f">
							{{value.Text}}
						</div>
						<i :class="value.font" aria-hidden="true" class="index-top-i"></i>
					</li>
				</ul>
			</div>
		</div>
		<div id="ech">
			<div class="wrap">
				<div class="eb">
					<div ref='two' class="e-two"></div>
					<div ref='one' class="e-one"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headers from './headers'
	import echarts from 'echarts'
	export default {
		components:{headers},
		data: function() {
			return {
				arr: [{
						name: '课程列表',
						en: 'Course List',
						font: 'fa fa-th-large fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					},
					{
						name: '课程添加',
						en: 'Course ADD',
						font: 'fa fa-plus fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					},
					{
						name: '用户注册',
						en: 'Course List',
						font: 'fa fa-arrow-up fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					},
					{
						name: '视频管理',
						en: 'Video Manage',
						font: 'fa fa-youtube-play fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					},
					{
						name: '用户注册',
						en: 'Course List',
						font: 'fa fa-th-large fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					},
					{
						name: '用户注册',
						en: 'Course List',
						font: 'fa fa-th-large fa-3x',
						Text: '查询现有课程，添加课程，挂你课程。'
					}
				]
			}
		},
		methods: {

		},
		mounted: function() {
			var one = echarts.init(this.$refs.one)
			var two = echarts.init(this.$refs.two)
			one.setOption({
				backgroundColor: '#2c343c',

				title: {
					text: 'Customized Pie',
					left: 'center',
					top: 20,
					textStyle: {
						color: '#ccc'
					}
				},

				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},

				visualMap: {
					show: false,
					min: 80,
					max: 600,
					inRange: {
						colorLightness: [0, 1]
					}
				},
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					center: ['50%', '50%'],
					data: [{
							value: 335,
							name: '直接访问'
						},
						{
							value: 310,
							name: '邮件营销'
						},
						{
							value: 274,
							name: '联盟广告'
						},
						{
							value: 235,
							name: '视频广告'
						},
						{
							value: 400,
							name: '搜索引擎'
						}
					].sort(function(a, b) {
						return a.value - b.value;
					}),
					roseType: 'radius',
					label: {
						normal: {
							textStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							}
						}
					},
					labelLine: {
						normal: {
							lineStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							},
							smooth: 0.2,
							length: 10,
							length2: 20
						}
					},
					itemStyle: {
						normal: {
							color: '#c23531',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},

					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function(idx) {
						return Math.random() * 200;
					}
				}]
			})
			two.setOption({
				xAxis: {},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [
						[10.0, 8.04],
						[8.0, 6.95],
						[13.0, 7.58],
						[9.0, 8.81],
						[11.0, 8.33],
						[14.0, 9.96],
						[6.0, 7.24],
						[4.0, 4.26],
						[12.0, 10.84],
						[7.0, 4.82],
						[5.0, 5.68]
					],
					type: 'scatter'
				}]
			})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	#index {
		background: url(../assets/index_body_bg.jpg) no-repeat;
		color: #FFF;
	}
	
	.index-top {
		width: 100%;
		text-align: center;
		padding-top: 50px;
	}
	
	.wrap {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.wrap ul li {
		float: left;
		width: 150px;
		height: 150px;
		background: rgba(255, 255, 255, .1);
		margin-right: 50px;
		margin-bottom: 50px;
		cursor: pointer;
	}
	
	.index-top-p {
		height: 80px;
		line-height: 80px;
		font-size: 25px;
	}
	
	.index-top-e {
		font-size: 12px;
	}
	
	.index-top-f {
		font-size: 12px;
		display: none;
	}
	
	.wrap ul li:hover {
		background: #3CB1E5;
	}
	
	.wrap ul li:hover .index-top-i {
		transform: translateY(-90px);
		transition: all 1s ease;
	}
	
	.wrap ul li:hover .index-top-p {
		transform: translateY(50px);
		transition: all 1s ease;
	}
	
	.wrap ul li:hover .index-top-f {
		display: block;
		transform: translateY(30px);
		transition: all 1s ease;
	}
	
	.wrap ul li:hover .index-top-e {
		display: none;
		transform: translateY(30px);
		transition: all 1s ease;
	}
	
	#ech {
		width: 100%;
	}
	.eb{
		background: rgba(255,255,255,.1);
		padding: 50px;
		overflow: hidden;
	}
	.e-one,
	.e-two{
		width: 300px;
		height: 300px;
		background: #FFF;
		float: left;
		margin-right: 50px;
	}
</style>