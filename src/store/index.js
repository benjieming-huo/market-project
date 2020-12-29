import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //是否显示底部导航栏
    isShowFooter:true,
    jwt:"",
    list: [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ],
    disabledList: [
      {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号',
      },
    ],
  },
  mutations: {
    isShowFooter(state,val){
      state.isShowFooter=val; 
    },
    setJwt(state,val){
      state.jwt = val;
      localStorage.setItem("jwt",val);
    },
    changeList(state,val,id){
      state.List[id]=val;
     console.log(val,id);
    },
  },
  actions: {
  },
  modules: {
  }
})
