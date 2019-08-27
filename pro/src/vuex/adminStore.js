import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
axios.defaults.withCredentials=true;
var getlist = function(){
	axios({
		url:'/VueHandler/AdminHandler?action=show',
		method:'get',
		params:{
			searchText:state.searchText,
			pageStart:state.num
		}
	}).then(function(res){
		if(res.data.err){
			state.alllist = []
			alert(res.data.err)
		}
		if(res.data.data){
			state.alllist = res.data.data.list
			state.maxpage = Math.ceil(res.data.data.count/res.data.data.pageSize)
		}
	}).catch(function(err){
		console.log(err)
	})
}
var getlists = function(){
	axios({
		url:'/VueHandler/AdminHandler?action=usershow',
		method:'POST',
		data:{
			userName:state.userNames,
			email:state.emails,
			phone:state.phones,
			pageStart:state.nums
		}
	}).then(function(res){
		if(res.data.err){
			state.alllists = []
			alert(res.data.err)
		}
		if(res.data.data){
			state.alllists = res.data.data.list
			state.maxpages = Math.ceil(res.data.data.count/res.data.data.pageSize)
		}
	}).catch(function(err){
		console.log(err)
	})
}
var state = {
	userNames:'',
	emails:'',
	phones:'',
	num:1,
	nums:1,
	lock:false,
	getlists,
	alllist:[],
	alllists:[],
	maxpage:1,
	maxpages:1,
	searchText:'',
	getlist,
	tokenId:0,
	shows:false,
	showss:false,
	userInfor:{
		userName:'',
		tokenId:'',
		turename:'',
		phone:'',
		power:''
	}
}
var mutations = {
	add(state){
		state.num++
		if(state.num>state.maxpage){
			state.num = state.maxpage
		}
	},
	sadd(state){
		state.nums++
		if(state.nums>state.maxpages){
			state.nums = state.maxpages
		}
	},
	adds(state){
		state.num--
		if(state.num<1){
			state.num = 1
		}
	},
	sadds(state){
		state.nums--
		if(state.nums<1){
			state.nums = 1
		}
	},
	ads(state){
		state.num = 1
	},
	sads(state){
		state.nums = 1
	},
	ad(state){
		state.nums = state.maxpage
	},
	sad(state){
		state.nums = state.maxpages
	},
	find(state,n){
		state.searchText = n
	},
	finds(state,n,k,l){
		state.userNames = n
		state.emails = k
		state.phones = l
	},
	emit(state,user){
		state.userInfor.userName = user.userName
		state.userInfor.turename = user.turename
		state.userInfor.phone = user.phone
		state.userInfor.power = user.power
		state.userInfor.tokenId = user.tokenId
	}
}
export default new Vuex.Store({
	state,
	mutations
})
