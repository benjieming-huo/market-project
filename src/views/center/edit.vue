<template>
  <div id="app">
   <div @click="goback">返回</div>
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @change-detail="onChangeDetail"
/>
  </div>
</template>
<script>
import Vue from "vue";

import { AddressEdit , Toast} from "vant";
Vue.use(AddressEdit);
Vue.use(Toast);



export default {

  data() {
    return {
      areaList:{
         province_list: {
    110000: '北京市',
    120000: '天津市'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县'
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
  
  }
      },
      searchResult: [],
      list:[],
      id:0,
    };
  },
  created () {
    this.$store.commit("isShowFooter" ,false)
    this.list=(JSON.parse(window.localStorage.getItem("address"))) || [];
  },
 methods: {
   goback(){
      this.$router.go(-1);
    },
  onSave(content) { 
    this.list.push(
      {
        id:this.list.length+3,
        name:content.name,
        tel:content.tel,
        address:content.addressDetail,
    }
    );
      window.localStorage.setItem("address",JSON.stringify(this.list));
       this.$router.push("/address");
      console.log(this.list);
    },
    

    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else 
        this.searchResult = [];
      }
    },
  
};
</script>
<style lang="scss">
</style>
