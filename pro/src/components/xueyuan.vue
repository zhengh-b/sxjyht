<template>
	<div>
		<div v-show='this.$store.state.shows'>
			<addam></addam>
		</div>
		<headers></headers>
		<div class="boxs">
			<div class="boxs-w">
				<div class="boxs-t">
					<p><span>首页/</span>用户管理/学员列表</p>
				</div>
				<div class="boxs-t-o">
					<input type="text" placeholder="用户名" class="boxs-t-oi" ref='findd'/>
					<input type="text" placeholder="邮箱" class="boxs-t-oi" ref='findd1'/>
					<input type="text" placeholder="手机号" class="boxs-t-oi" ref='findd2'/>
					<button class="boxs-t-ob" @click="finds">查询</button><br />
					<input type="text" placeholder="用户名" class="boxs-t-oi" ref='findd3'/>
					<input type="text" placeholder="邮箱" class="boxs-t-oi" ref='findd4'/>
					<input type="text" placeholder="手机号" class="boxs-t-oi" ref='findd5'/>
					<button class="boxs-t-obs" @click="shos">+添加</button>
				</div>
				<div class="boxs-t-t">
					<span><i class="fa fa-th" aria-hidden="true"></i></span>系统人员列表
				</div>
				<div class="boxs-t-b">
					<div class="boxs-t-bt">
						<span class="boxs-t-bt1">用户名</span>
						<span class="boxs-t-bt2">邮箱</span>
						<span class="boxs-t-bt3">手机</span>
						<span class="boxs-t-bt4">注册日期</span>
						<span class="boxs-t-bt5">状态</span>
						<span class="boxs-t-bt6">操作</span>
					</div>
					<div class="boxs-t-bts">
						<div ref="boxs" v-if="this.$store.state.alllists.length == 0" style="text-align: center;">
							没有此用户
						</div>
						<div ref="boxs" v-else v-for="i in this.$store.state.alllists">
							<span class="boxs-t-bt1">{{i.userName}}</span>
							<span class="boxs-t-bt2">{{i.email}}</span>
							<span class="boxs-t-bt3">{{i.phone}}</span>
							<span class="boxs-t-bt4">{{i.createAt.substring(-1,18)}}</span>
							<span class="boxs-t-bt5"><span class="boxs6-o" v-if="!i.isstate">解冻</span><span class="boxs6-o" v-if="i.isstate">冻结</span></span>
							<span class="boxs-t-bt6"><span class="boxs6-t" @click="jds(i.tokenId)" v-if="!i.isstate">冻结</span><span class="boxs6-t" @click="jds(i.tokenId)" v-if="i.isstate">解冻</span></span>
						</div>
					</div>
				</div>
				<div class="botts">
					<div class="totos">
						<div class="tos" @click="jianss()"><img src="../assets/first.png"/></div>
						<div class="tos" @click="jians()"><img src="../assets/prev.png"/></div>
						<div class="tos">{{this.$store.state.nums}}</div>
						<div class="tos" @click="jias()"><img src="../assets/next.png"/></div>
						<div class="tos" @click="jiass()"><img src="../assets/last.png"/></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import addam from './addadmin.vue'
	import headers from './headers'
	import store from '@/vuex/adminStore'
	export default{
		store,
		components:{headers,addam},
		methods:{
			shos:function(){
				var findd3 = this.$refs.findd3.value
				var findd4 = this.$refs.findd4.value
				var findd5 = this.$refs.findd5.value
				this.$axios({
					url:'/VueHandler/AdminHandler?action=adduser',
					method:'POST',
					data:{
						addemail:findd4,
						adduserName:findd3,
						addphone:findd5
					}
				}).then(function(res){
					console.log(res)
					if(res.data.err){
						alert(res.data.err)
					}
					if(res.data.success){
						alert(res.data.success)
					}
				}).catch(function(err){
					console.log(err)
				})
				this.$store.state.getlists()
				this.$refs.findd3.value = ''
				this.$refs.findd4.value = ''
				this.$refs.findd5.value = ''
			},
			jianss:function(){
				this.$store.commit('sads')
				this.$store.state.getlists()
			},
			jians:function(){
				this.$store.commit('sadds')
				this.$store.state.getlists()
			},
			jias:function(){
				this.$store.commit('sadd')
				this.$store.state.getlists()
			},
			jiass:function(){
				this.$store.commit('sad')
				this.$store.state.getlists()
			},
			finds:function(){
				var findd = this.$refs.findd.value
				var findd1 = this.$refs.findd1.value
				var findd2 = this.$refs.findd2.value
				this.$store.commit('finds',findd,findd1,findd2)
				this.$store.state.getlists()
			},
			sho:function(){
				
			},
			jds:function(k){
				var that = this
				this.$axios({
					url:'/VueHandler/AdminHandler?action=lockuser',
					method:'get',
					params:{
						tokenId:k
					}
				}).then(function(res){
					if(res.data.success){
						alert(res.data.success)
						that.$store.state.getlists()
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		mounted:function(){
			this.$store.state.getlists()
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.boxs{
		width: 100%;
		background: #F5F5F5;
	}
	.boxs-w{
		width: 98%;
		margin: 0 auto;
	}
	.boxs-t span{
		color: #388BE7;
	}
	.boxs-t{
		font-size: 16px;
		line-height: 30px;
	}
	.boxs-t-o{
		border: 1px solid #999;
		height: 100px;
		line-height: 50px;
		background: #FFF;
		margin-top: 10px;
	}
	.boxs-t-oi{
		margin-left: 10px;
		line-height: 30px;
		padding-left: 5px;
		outline: none;
		width: 240px;
	}
	.boxs-t-ob{
		margin-left: 10px;
		line-height: 34px;
		background: #5CB95C;
		border: none;
		width: 70px;
		color: #FFF;
	}
	.boxs-t-obs{
		line-height: 34px;
		margin-left: 10px;
		border: none;
		width: 70px;
		color: #FFF;
		background: #4E66B3;
	}
	.boxs-t-t{
		border: 1px solid #999;
		background: #FFF;
		margin-top: 10px;
		line-height: 30px;
		font-size: 14px;
	}
	.boxs-t-t span{
		display: block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		float: left;
		margin-right: 10px;
		border-right: 1px solid #999;
	}
	.boxs-t-b{
		border: 1px solid #999;
	}
	.boxs-t-bt{
		border-bottom: 1px solid #999;
		line-height: 30px;
	}
	.boxs-t-bt1{
		display: inline-block;
		width: 100px;
		padding-left: 5px;
	}
	.boxs-t-bt2{
		display: inline-block;
		width: 430px;
		padding-left: 5px;
	}
	.boxs-t-bt3{
		display: inline-block;
		padding-left: 5px;
		width: 200px;
	}
	.boxs-t-bt4{
		display: inline-block;
		padding-left: 5px;
		width: 180px;
	}
	.boxs-t-bt5{
		display: inline-block;
		padding-left: 5px;
		width: 150px;
	}
	.boxs-t-bt6{
		display: inline-block;
		padding-left: 5px;
		width: 150px;
	}
	.boxs-t-bts{
		height: 240px;
		background: #FFF;
		line-height: 30px;
	}
	.boxs-t-bts1{
		display: inline-block;
		width: 130px;
		padding-left: 6px;
	}
	.boxs-t-bts2{
		display: inline-block;
		width: 130px;
		padding-left: 6px;
	}
	.boxs-t-bts3{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.boxs-t-bts4{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.boxs-t-bts5{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.boxs-t-bts6{
		display: inline-block;
		padding-left: 6px;
		width: 240px;
	}
	.boxs6-o{
		color: #000;
		margin: 0 30px 0 5px;
	}
	.boxs6-t{
		color: #0000ff;
		cursor: pointer;
	}
	.botts{
		background: #FFF;
		border: 1px solid red;
		height: 50px;
		line-height: 50px;
		width: 99.9%;
	}
	.tos{
		margin: 0 10px;
		display: inline-block;
	}
	.totos{
		padding-left: 50px;
	}
	.tos>img{
		vertical-align: middle;
		cursor: pointer;
	}
</style>