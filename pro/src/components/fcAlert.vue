<template>
	<div class="back">
		<div class="backs">
			<div class="back-wrap">
				<div class="back-top">
					修改密码
					<span @click="vul()">X</span>
				</div>
				<div class="back-b">
					<span style="margin-left: 8px;">当前密码：</span><input type="text" ref='oldpas'/><br />
					<span style="margin-left: 10px;">&nbsp;&nbsp;&nbsp;新密码：</span><input type="text" ref='newpas'/><br />
					<span style="margin-left: 8px;">确认密码：</span><input type="text" ref='newpass'/><br />
					<button class="back-b-one" @click="uppass()">确认</button>
					<button class="back-b-two" @click="vul()">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data:function(){
		return{
			nn:false
		}
	},
	methods:{
		vul:function(){
			this.$emit('nnn',this.nns)
		},
		uppass:function(){
			var oldpas = this.$refs.oldpas.value;
			var newpas = this.$refs.newpas.value;
			var newpass = this.$refs.newpass.value;
			var that = this;
			if(newpas!==newpass){
				alert('两次密码不一致')
			}else if(oldpas==null||newpas==null||newpass==null){
				alert('请输入内容')
			}else{
				this.$axios({
					url:'/VueHandler/AdminHandler?action=updatepass',
					method:'post',
					data:{
						userPwd:oldpas,
						newPwd:newpass
					}
				}).then(function(res){
					if(res.data.success){
						alert(res.data.success)
					}
					if(res.data.err){
						alert(res.data.err)
					}
				}).catch(function(err){
					alert(err)
				})
			}
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
	.backs{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(255,255,255,.8);
		z-index: 3;
	}
	.back-wrap{
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
	.back-top{
		background: #4960AE;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #fff;
		padding-left: 15px;
	}
	.back-top span{
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
	.back-b{
		margin-top: 5px;
		line-height: 30px;
		position: relative;
	}
	.back-b input{
		outline: none;
	}
	.back-b span{
		color: #000;
	}
	.back-b-one{
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
	.back-b-two{
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