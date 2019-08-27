<template>
	<div class="addam">
		<div class="addams">
			<div class="addam-wrap">
				<div class="addam-top">
					修改密码
					<span @click="cel()">X</span>
				</div>
				<div class="addam-b">
					<span style="margin-left: 8px;">&nbsp;&nbsp;&nbsp;&nbsp;用户名：</span><input type="text" ref='names'/><br />
					<span style="margin-left: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名：</span><input type="text" ref='tname'/><br />
					<span style="margin-left: 8px;">&nbsp;&nbsp;&nbsp;&nbsp;手机号：</span><input type="text" ref='phones'/><br />
					<span style="margin-left: 8px;">权限选择：</span>
					<select name="" ref='powers'>
						<option value=""></option>
						<option value="">系统管理员</option>
						<option value="">课程管理员</option>
					</select>
					<br />
					<button class="addam-b-one" @click="add()">确认</button>
					<button class="addam-b-two" @click="cel()">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/adminStore'
	export default{
		store,
		methods:{
			cel:function(){
				this.$store.state.shows = false
			},
			add:function(){
				var that = this
				var names = this.$refs.names.value
				var tname = this.$refs.tname.value
				var phones = this.$refs.phones.value
				var powers = this.$refs.powers.value
				this.$axios({
					url:'/VueHandler/AdminLoginAndRegHandler?action=add',
					method:'post',
					data:{
						userName:names,
						tokenId:'',
						turename:tname,
						phone:phones,
						password:'123456',
						power:powers
					}
				}).then(function(res){
					if(res.data.success){
						alert(res.data.success)
						that.$store.state.getlist()
					}
					if(res.data.err){
						alert(res.data.err)
					}
				}).catch(function(err){
					console.log(err)
				})
				that.$refs.names.value = '';
				that.$refs.tname.value = '';
				that.$refs.phones.value = '';
				that.$refs.powers.value = ''
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.addams{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(255,255,255,.8);
		z-index: 3;
	}
	.addam-wrap{
		border: 5px solid #4960AE;
		background: #fff;
		width: 350px;
		height: 200px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -100px;
		margin-left: -175px;
	}
	.addam-top{
		background: #4960AE;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #fff;
		padding-left: 15px;
	}
	.addam-top span{
		width: 20px;
		height: 20px;
		position: absolute;
		display: inline-block;
		background: rgba(255,255,255,.3);
		border-radius: 50%;
		color: #4960AE;
		text-align: center;
		line-height: 20px;
		right: 3px;
		top: 3px;
		cursor: pointer;
	}
	.addam-b{
		margin-top: 5px;
		line-height: 30px;
		position: relative;
	}
	.addam-b input{
		outline: none;
	}
	.addam-b span{
		color: #000;
	}
	.addam-b-one{
		position: absolute;
		bottom: -40px;
		left: 40px;
		width: 80px;
		height: 30px;
		color: #fff;
		outline: none;
		background: #59AE60;
		border: none;
	}
	.addam-b-two{
		position: absolute;
		bottom: -40px;
		right: 40px;
		width: 80px;
		height: 30px;
		color: #fff;
		outline: none;
		background: #3DA6CA;
		border: none;
	}
</style>