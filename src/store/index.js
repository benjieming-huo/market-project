import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //是否显示底部导航栏
    content:{},
    isShowFooter:true,
    jwt:"",
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
    // isContent(state,val){
    //   state.content=val;
    // }
  },
  actions: {
  },
  modules: {
  }
})
