<template>
	<div>
		<div v-show='this.$store.state.shows'>
			<addam></addam>
		</div>
		<div v-show='this.$store.state.showss'>
			<addams></addams>
		</div>
		<headers></headers>
		<div class="box">
			<div class="box-w">
				<div class="box-t">
					<p><span>首页/</span>用户管理/系统人员</p>
				</div>
				<div class="box-t-o">
					<input type="text" placeholder="姓名查询" class="box-t-oi" ref='findd'/>
					<button class="box-t-ob" @click="finds">查询</button>
					<button class="box-t-obs" @click="sho">+添加</button>
				</div>
				<div class="box-t-t">
					<span><i class="fa fa-th" aria-hidden="true"></i></span>系统人员列表
				</div>
				<div class="box-t-b">
					<div class="box-t-bt">
						<span class="box-t-bt1">用户名</span>
						<span class="box-t-bt2">姓名</span>
						<span class="box-t-bt3">后台权限</span>
						<span class="box-t-bt4">手机号</span>
						<span class="box-t-bt5">编辑日期</span>
						<span class="box-t-bt6">操作</span>
					</div>
					<div class="box-t-bts">
						<div ref="boxs" v-if="this.$store.state.alllist.length == 0" style="text-align: center;">
							没有此用户
						</div>
						<div ref="boxs" v-else v-for="i in this.$store.state.alllist">
							<span class="box-t-bts1">{{i.userName}}</span>
							<span class="box-t-bts2">{{i.turename}}</span>
							<span class="box-t-bts3">{{i.power}}</span>
							<span class="box-t-bt4">{{i.phone}}</span>
							<span class="box-t-bt5">{{i.createAt.substring(-1,18)}}</span>
							<span class="box-t-bts6"><span class="box6-o" @click="updates(i)">编辑</span><span class="box6-t" @click="del(i.tokenId)">删除</span></span>
						</div>
					</div>
				</div>
				<div class="bott">
					<div class="toto">
						<div class="to" @click="jians()"><img src="../assets/first.png"/></div>
						<div class="to" @click="jian()"><img src="../assets/prev.png"/></div>
						<div class="to">{{this.$store.state.num}}</div>
						<div class="to" @click="jia()"><img src="../assets/next.png"/></div>
						<div class="to" @click="jias()"><img src="../assets/last.png"/></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import addam from './addadmin.vue'
	import addams from './addadmins.vue'
	import headers from './headers'
	import store from '@/vuex/adminStore'
	export default{
		store,
		components:{headers,addam,addams},
		methods:{
			sho:function(){
				this.$store.state.shows = true
			},
			jia:function(){
				this.$store.commit('add')
				this.$store.state.getlist()
			},
			jian:function(){
				this.$store.commit('adds')
				this.$store.state.getlist()
			},
			jias:function(){
				this.$store.commit('ad')
				this.$store.state.getlist()
			},
			jians:function(){
				this.$store.commit('ads')
				this.$store.state.getlist()
			},
			finds:function(){
				var findd = this.$refs.findd.value
				this.$store.commit('find',findd)
				this.$store.state.getlist()
			},
			del:function(l){
				var that = this
				this.$axios({
					url:'/VueHandler/AdminHandler?action=delete',
					method:'get',
					params:{
						tokenId:l
					}
				}).then(function(res){
					console.log(this)
					if(res.data.success){
						alert(res.data.success)
						that.$store.state.getlist()
					}
				}).catch(function(err){
					console.log(err)
				})
			},
			updates:function(i){
				this.$store.commit('emit',i)
				this.$store.state.showss = true
			}
		},
		mounted:function(){
			this.$store.state.getlist()
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.box{
		width: 100%;
		background: #F5F5F5;
	}
	.box-w{
		width: 98%;
		margin: 0 auto;
	}
	.box-t span{
		color: #388BE7;
	}
	.box-t{
		font-size: 16px;
		line-height: 30px;
	}
	.box-t-o{
		border: 1px solid #999;
		height: 50px;
		line-height: 50px;
		background: #FFF;
		margin-top: 10px;
	}
	.box-t-oi{
		margin-left: 10px;
		line-height: 30px;
		padding-left: 5px;
		outline: none;
		width: 240px;
	}
	.box-t-ob{
		margin-left: 10px;
		line-height: 34px;
		background: #5CB95C;
		border: none;
		width: 70px;
		color: #FFF;
	}
	.box-t-obs{
		line-height: 34px;
		border: none;
		width: 70px;
		color: #FFF;
		background: #4E66B3;
		float: right;
		margin-top: 8px;
		margin-right: 25px;
	}
	.box-t-t{
		border: 1px solid #999;
		background: #FFF;
		margin-top: 10px;
		line-height: 30px;
		font-size: 14px;
	}
	.box-t-t span{
		display: block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		float: left;
		margin-right: 10px;
		border-right: 1px solid #999;
	}
	.box-t-b{
		border: 1px solid #999;
	}
	.box-t-bt{
		border-bottom: 1px solid #999;
		line-height: 30px;
	}
	.box-t-bt1{
		display: inline-block;
		width: 130px;
		padding-left: 5px;
	}
	.box-t-bt2{
		display: inline-block;
		width: 130px;
		padding-left: 5px;
	}
	.box-t-bt3{
		display: inline-block;
		padding-left: 5px;
		width: 240px;
	}
	.box-t-bt4{
		display: inline-block;
		padding-left: 5px;
		width: 240px;
	}
	.box-t-bt5{
		display: inline-block;
		padding-left: 5px;
		width: 240px;
	}
	.box-t-bt6{
		display: inline-block;
		padding-left: 5px;
		width: 240px;
	}
	.box-t-bts{
		height: 240px;
		background: #FFF;
		line-height: 30px;
	}
	.box-t-bts1{
		display: inline-block;
		width: 130px;
		padding-left: 6px;
	}
	.box-t-bts2{
		display: inline-block;
		width: 130px;
		padding-left: 6px;
	}
	.box-t-bts3{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.box-t-bts4{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.box-t-bts5{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.box-t-bts6{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.box6-o{
		color: #0000ff;
		margin: 0 30px 0 5px;
		cursor: pointer;
	}
	.box6-t{
		color: #0000ff;
		cursor: pointer;
	}
	.bott{
		background: #FFF;
		border: 1px solid red;
		height: 50px;
		line-height: 50px;
		width: 99.9%;
	}
	.to{
		margin: 0 10px;
		display: inline-block;
	}
	.toto{
		padding-left: 50px;
	}
	.to>img{
		vertical-align: middle;
		cursor: pointer;
	}
</style>