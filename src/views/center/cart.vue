<template>
  <div id="box">
    <!-- 头 -->
       <div class="leftd iconfont icon-right" @click="change"></div>

    <div class="header">
      <h1>购物车</h1>
    </div>
    <!-- 商品列表 -->
     <input type="checkbox" @change="checkAll" v-model="ischeck">全选
      <button @click="revserse">不要了</button>
    <div v-for="(item,index) in database" :key="index">
    <div class="list">
     
      <div class="left">
       <input :value="item.id"  v-model="checkarr" @change="only" class="chec" type="checkbox">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3382838140,4184179756&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="center">
        <h4>{{item.title}}</h4>
        <span>{{item.name}}</span>
        <div>&yen;{{item.price}}</div>
         总价:{{item.num*item.price}}
         <div>
            <button @click="reduce(item)">-</button><input class="a" maxlength="2" type="text" v-model="database[index].num"><button @click="add(item)">+</button>
         </div>
      </div>
      <div class="right">×</div>
    </div>
    </div>
    <!-- 结算 -->
    <div class="account">
      <van-submit-bar  button-text="提交订单" @submit="onSubmit" >
       <span class="span">总价：￥{{totprice}} 元</span>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import "@/assets/ieon/iconfont.css";

import Vue from 'vue';
import { Stepper,SubmitBar } from 'vant';

Vue.use(Stepper);
Vue.use(SubmitBar);
let database =[
  {
    id:1,
    title:"老王外设j键盘",
    name:"超级好用的键盘",
    price:100,
    num:1,
  },
  {
    id:2,
    title:"老王外设j键盘",
    name:"超级好用的键盘",
    price:240,
    num:1,
  },
  {
    id:3,

    title:"老习外设j键盘",
    name:"超级好用的键盘",
    price:100,
    num:1,
  },
  {
    id:4,

    title:"老王外设键盘",
    name:"超级好用的键盘",
    price:100,
    num:1,
  }
]
let checkarr = JSON.parse(window.localStorage.getItem('cart'));   
export default {
  
    data() {
    return {
      num: 1,
      database,
      ischeck:false,
      checkarr:[]
    };
  },
  methods: {
   change() {
      this.$router.go(-1);
    },
    onSubmit(){
      this.$router.push("/er_code")
    },
  add(item){
    item.num++;
  },
   reduce(item){
     if(item.num<1){
       item.num=0;
     }else{
       item.num--;
     }
  },
  checkAll(){
    this.checkarr=[]
    if(this.ischeck){
       this.database.forEach(v => {
        this.checkarr.push(v.id)
      })
    }
  },
   only: function () {
     this.ischeck = false;
     if (this.checkarr.length === this.database.length) {
      this.ischeck = true;
     }
  },
  revserse: function () {
     let msg = [];
     this.database.forEach(v => {
     if (!this.checkarr.includes(v.id)) {
       msg.push(v.id)
    }
  })
     this.checkarr = msg;
     
},
  },
  created () {
    this.$store.commit('isShowFooter',false);    
    },
   watch: {
      checkarr: function (newval, oldval) {      
      this.ischeck = false;
        if (this.checkarr.length === this.database.length) {
          this.ischeck = true;
        }
         window.localStorage.setItem('cart',JSON.stringify(this.checkarr))
      },   
},
    computed: {
        totprice: function () {      
            let total = 0;
            console.log(this.database)
            this.database.forEach(v => {
                 console.log(this.checkarr);

                if (this.checkarr.includes(v.id)) {
                  console.log(1)
                    total += v.price * v.num;
                }
            });
            return total;
        }
  }
};
</script>























<style lang="scss" scoped>
.span{
  display: inline-block;
 position: absolute;
 left: 20px;
 color: rgb(77, 76, 76);
 font-size: 20px;
}
.a{
  width: 30px;
}
.header {
  width: 200;
  text-align: center;
}
.list {
  display: flex;
  justify-content: space-between;
}
.right {
  padding-right: 20px;
  padding-top: 60px;
  font-size: 20px;
}

.left {
  width: 30%;
  position: relative;
}
.chec{
  position: absolute;
  top: 15px;
  left: 10px;
}
.van-submit-bar{
  position: fixed;
  bottom: 0;
}
.leftd {
  width: 45px;
  height: 45px;
  color: rgb(230, 227, 227);
  font-size: 30px;
  line-height: 45px;
  margin-left: 20px;
  text-align: center;
  border-radius: 50%;
  margin-top: 20px;
  background: rgb(37, 37, 37);
}

</style>