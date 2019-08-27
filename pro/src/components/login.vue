<template>
	<div class="content">
	    <bg-canvas></bg-canvas>
	    <!--包裹的div-->
	    <div class="login_wrap" >
	      <img src="../assets/back_logo.png" class="logo" alt="" />
          <form>
          	<!-- 图标 和 输入框  -->
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-user"></i>
          		</span>
          		<input type="text" placeholder="用户名" ref='username'/>
          	</div>
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input type="text" placeholder="密码" ref='psw'/>
          	</div>
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input type="text" style="width: 310px;" placeholder="请输入验证码" ref='dl'/>
          	    <!--这里放验证码的组件-->
          	    <veri></veri>
          	</div>
          </form>
          <button class="btn btn-info" @click="wj()">忘记密码</button>
          <button class="btn btn-success" @click="dl()">登录</button>
	    </div>
	</div>
</template>
<script>	
import bgCanvas from './bgCanvas.vue';
import veri from './verification'
export default {
	components:{bgCanvas,veri},
	mounted:function(){
		
	},
	methods:{
	  dl:function(){
	  	var veri = this.$refs.dl.value
	  	var username = this.$refs.username.value
	  	var psw = this.$refs.psw.value
	  	var that = this
	  	that.$axios({
	  		url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
	  		method:'get',
	  		params:{
	  			veri
	  		}
	  	}).then(function(res){
	  		if(res.data.success){
	  			alert('验证码成功')
	  			that.$axios({
	  				url:'/VueHandler/AdminLoginAndRegHandler?action=login',
			  		method:'post',
			  		data:{
			  			userName:username,
			  			password:psw
			  		}
	  			}).then(function(res){
	  				if(res.data.success){
	  					alert('登录成功')
	  					window.location.href = '#/index'
	  				}else{
	  					alert(res.data.err)
	  				}
	  			}).catch(function(err){
	  				alert(err)
	  			})
	  		}else{
	  			alert('验证码失败')
	  		}
	  	}).catch(function(err){
	  		alert(err)
	  	})
	  },
	  wj:function(){
	  	alert('该功能暂未开放')
	  }
	}
}





</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
  .content {
    background: #0d1953;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  
  .content img {
    width:380px;
    height: 80px;
    border: none;
  }

  .content bg-cavas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .login_wrap {
    width: 560px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -280px;
    z-index: 3;
    color: #fff;
  }

  .login_wrap .logo {
    margin-left: 100px;
    margin-bottom: 29px;
  }

  .login_wrap form {
    margin-left: 50px;
  }

  .login_wrap input {
    background: #0d1953;
    width: 413px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #3c498a;
    margin-left: 0px;
    padding-left: 5px;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  .oneinput_box {
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    width: 457px;
    padding-left: 10px;
  }

  .oneinput_box * {
    float: left;
  }

  .oneinput_box span {
    background: #0d1953;
    border: 1px solid #3c498a;
    padding: 11px 9px;
    border-right: none 0;
    height: 12px;
    width: 10px;
    padding-left: 10px;
    overflow: hidden;

  }

  .oneinput_box .icon {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
  }

  .oneinput_box .fa-lock {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
    z-index: 1000000000;
  }

  .erwei_code {
    width: 91px;
    height: 34px;
    float: right;
    cursor: pointer;
  }

  .btn {
    width: 113px;
    height: 34px;
    line-height: 34px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: left;
  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: right;
  }

  .btn-success:hover {
    background: #449d44;
  }	
</style>