import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //是否显示底部导航栏
    isShowFooter:true,
  },
  mutations: {
    isShowFooter(state,val){
      state.isShowFooter=val;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
