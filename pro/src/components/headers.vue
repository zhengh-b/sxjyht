<template>
  <div class="hello">
  	<div v-show='nn'><fc-alert v-on:nnn='nnss'></fc-alert></div>
  	<div class="header">
  		<div class="header-t">
  			<div class="header-t-l">
  				<img src="../assets/back_logo.png"/>
  			</div>
  			<div class="header-t-r">
  				<ul>
  					<li><router-link to='#'><i class="fa fa-globe" aria-hidden="true"></i>思学教育</router-link></li>
  					<li><router-link to='#'><i class="fa fa-comment" aria-hidden="true"></i>在线客服</router-link></li>
  					<li><router-link to='#'><i class="fa fa-book" aria-hidden="true"></i>常见问题</router-link></li>
  					<li @click="uppw()"><router-link to='#'><i class="fa fa-lock" aria-hidden="true"></i>安全中心</router-link></li>
  					<li @click='quit()'><router-link to='#' ><i class="fa fa-sign-out" aria-hidden="true"></i>退出</router-link></li>
  					<li><router-link to='#'>{{name}}</router-link></li>
  					<li><img src="../assets/touxiang.jpg"/></li>
  				</ul>
  			</div>
  		</div>
  		<div class="header-b">
  			<ul>
  				<li @mouseenter="show()" @mouseleave="heid()">
  					<i></i>
  					<span></span>
  					用户管理
  				</li>
  				<li  @mouseenter="shows()" @mouseleave="heids()">
  					<i></i>
  					<span></span>
  					课程管理
  				</li>
  			</ul>
  		</div>
  		<div class="one"  v-show="xx"  @mouseenter="show()" @mouseleave="heid()">
				<span @click='go()'>系统人员</span>
				<span @click='gos()'>学员管理</span>
			</div>
			<div class="two"  v-show="xy"  @mouseenter="shows()" @mouseleave="heids()">
				<router-link to='#'>课程管理</router-link>
				<router-link to='#'>课程编辑</router-link>
				<router-link to='#'>视频管理</router-link>
			</div>
  	</div>
  </div>
</template>

<script>
	import fcAlert from './fcAlert.vue'
	export default{
		components:{fcAlert},
		data:function(){
			return{
				xx:false,
				xy:false,
				nn:false,
				name:''
			}
		},
		methods:{
			go:function(){
				window.location.href = '#/admin'
			},
			gos:function(){
				window.location.href = '#/user'
			},
			show:function(){
				this.xx = true
			},
			heid:function(){
				this.xx = false
			},
			shows:function(){
				this.xy = true
			},
			heids:function(){
				this.xy = false
			},
			quit:function(){
				var that = this
				this.$axios({
					url:'/VueHandler/AdminHandler?action=quit',
					method:'get'
				}).then(function(res){
					alert(res.data.success)
					window.location.href = '#/'
				}).catch(function(err){
					console.log(err)
				})
			},
			nnss:function(data){
				this.nn = data
			},
			uppw:function(){
				this.nn = true
			}
		},
		mounted:function(){
			var that = this
			this.$axios({
				url:'/VueHandler/AdminHandler?action=returnuserinfo',
				method:'post'
			}).then(function(res){
				that.name = res.data.turename
			}).catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.header{
		width: 100%;
		height: 100px;
	}
	.header-t{
		height: 50px;
		width: 100%;
		background: #000;
		line-height: 50px;
	}
	.header-t-l{
		float: left;
		height: 50px;
		padding-left: 10px;
	}
	.header-t-l img{
		height: 40px;
		vertical-align: middle;
	}
	.header-t-r{
		height: 50px;
		line-height: 50px;
		float: right;
		font-size: 12px;
		text-align: center;
		padding-right: 10px;
	}
	.header-t-r ul li{
		float: left;
		height: 50px;
	}
	.header-t-r a{
		color: #9D9D9D;
		padding: 0 10px;
		text-decoration: none;
		display: inline-block;
	}
	.header-t-r a:hover{
		color: #fff;
	}
	.header-b{
		height: 50px;
		line-height: 50px;
		background: #3E4D8D;
		text-align: center;
		width: 100%;
	}
	.header-b ul li{
		float: left;
		font-size: 16px;
		color: #fff;
		width: 120px;
		height: 50px;
		cursor: pointer;
		position: relative;
	}
	.header-b ul{
		padding: 0 10px;
	}
	.one,
	.two{
		width: 100%;
		height: 100px;
		line-height: 100px;
		background: #FFF;
		position: absolute;
	}
	.one span,
	.two a{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		width: 150px;
		text-align: center;
		border: 1px solid #eee;
		margin: 0 25px;
		color: #581E8D;
		text-decoration: underline;
		cursor: pointer;
	}
	.one span:hover,
	.two a:hover{
	  background: #581E8D;
	  color: white;
	}
</style>
