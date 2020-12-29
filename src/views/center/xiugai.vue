<template>
    <div>
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
import Vue from 'vue';
import { AddressEdit ,Toast} from 'vant';
Vue.use(Toast);
Vue.use(AddressEdit);
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
      list:[],
      searchResult: [],
    };
  },
  created () {
    // this.$route.params.id;
    //  console.log(this.$route);
    this.$store.commit("isShowFooter" ,false)
    // let arr=JSON.parse( window.localStorage.getItem("address"));
    // console.log(arr);
    // arr.forEach(v=>{
    //   // console.log(v);
    //   if( this.$route.params.id===v.id){
    //     console.log(v);
    //   }
    // })
  },
  methods: {
    onSave(content) {
      this.$route.params.id;
      let obj = {
        id: this.$route.params.id,
        name:content.name,
        tel:content.tel,
        address:content.addressDetail,
      }
     
    let arr=JSON.parse( window.localStorage.getItem("address"));
    arr.forEach((v,k)=>{
      if( this.$route.params.id==v.id){
        arr[k]=obj;
     
      }
    })
    window.localStorage.setItem("address",JSON.stringify(arr));
    Toast('修改成功');
    setTimeout(()=>{
      this.$router.push("/address")
    },2000)
    },
  
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }

  },
}
}
</script>
<style lang="scss" scoped>

</style>