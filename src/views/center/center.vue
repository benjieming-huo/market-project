<template>
  <div id="box">
    <h1>我的</h1>
    <!-- banner -->
    <div class="mypic"> 
      <img :src="userinfo.imginfo" v-if="userinfo.imginfo"/>
      <img  v-if="!userinfo.imginfo" src="../../assets/my.png" alt="" />
      <h1 @click="change" v-if="!userinfo.username">欢迎登录</h1>
      <h1 v-if="userinfo.username">{{userinfo.username}}</h1>
     
    </div>


    <!-- 商品订单 -->
    <div class="indent">
      <span class="indent-img"
        ><img src="../../assets/商品订单.png" alt=""
      /></span>
      <span class="indent-indent">商品订单</span>
      <span class="indent-all" @click="to">查看全部></span>
      <hr />
    </div>
    <!--  组件 -->

    <div class="listGuide">
      <listGuide />
    </div>

    <!-- 列表 -->

    <!-- 我的足迹 footprint -->
    <!-- 我的地址 address  -->
    <!-- 我的售后 after -->
    <!-- 联系客服 service -->
    <div class="list-box">
      <span>我的足迹</span>&nbsp;
      <span @click="footprint">></span>
      <hr />
    </div>
    <div class="list-box">
      <span>我的地址</span>&nbsp;
      <span @click="address">></span>
      <hr />
    </div>
    <div class="list-box">
      <span>我的售后</span>&nbsp;
      <span @click="after">></span>
      <hr />
    </div>
    <div class="list-box" @click="exit">
      <span >退出登录</span>&nbsp;
      <span >></span>
      <hr />
    </div>
  </div>
</template>
<script>
// 导入菜单组件
import listGuide from "../../components/list-guide";
import Vue from "vue";
import url from "@/config/uri";
export default {
  data() {
    return {
      active: 0,
      userinfo: {},
    };
  },
  created() {
    let jwt = localStorage.getItem("jwt");
        
    if (jwt) {
      console.log(jwt);
      this.$http.get(url.getData).then((ret) => {
        this.userinfo = ret.data;
        console.log(ret.data);
        console.log(this.userinfo);
        console.log(this.userinfo.username);
      });
    }
  },
  methods: {
    //跳转登录
    change() {
      this.$router.push("/login");
    },
    to(){
      this.$router.push("/cart");
    },
    footprint() {
      // console.log(111);
    },
    address() {
      this.$router.push("/address");
    },
    after() {
      console.log(333);
    },
    exit(){
      if(confirm('确认退出？')){
        this.userinfo={};
        localStorage.setItem('jwt','')
      }
    }
  },

  components: {
    listGuide,
  },
};
</script>
<style lang="scss" scoped>

.listGuide {
  position: relative;
  display: block;
  clear: both;
}

.list-box {
  width: 100%;
  display: block;
  height: 20px;
  margin-top: 30px;
  float: left;
}
#box {
  padding: 10px;
}

.mypic {
  width: 90%;
  margin-top: 20px;
  height: 90px;
  background: rgb(51, 51, 51);
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 4px;
  line-height: 90px;
  position: relative;
  h1 {
    position: absolute;
    display: inline-block;
    margin-left: 10px;
    margin-top: -5px;
    color: aliceblue;
    font-size: 16px;
    
  }
  img{
    height: 70px;
    width: 80x;
    border-radius: 50%;
    margin-top: 10px;
  }
 
}
.indent {
  margin-top: 24px;
  display: block;
  height: 60px;
  span {
    display: inline-block;
    width: 80px;
  }
  .indent-img {
    margin-left: 4px;
  }
}
</style>