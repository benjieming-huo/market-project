<template>
  <div>
    <div class="box">
      <p>请您注册</p>
      <span>用户名:</span><input placeholder="请设置用户名" v-model="username"/>
      <br />
      <span>用户密码:</span><input placeholder="请设置用户密码" />
      <br />
      <span>用户密码:</span><input placeholder="确认用户密码" v-model="pw1" />
      <br />
      <span>确认密码:</span><input placeholder="确认用户密码" v-model="pw2" @change="isT"/>
      <br />
      <span>验证码:</span><input placeholder="填写验证码" v-model="yzm_code" /><span style="background:">{{yzm_code}}</span>
      <a href="javascript:;" @click="changeYZM">看不清？换一个</a>
      <br />
      <button @click="isRight">确认</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from 'vant';
Vue.use(Toast);

export default {
  name: "logon",
  data() {
    return {
        username:"",
        pw1:"",
        pw2:"",
        yzm_code:"",

    };
  },
  created() {
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy(){
    this.$store.commit("isShowFooter", true);

  },
  mounted() {},
  methods: {
      isT(){
          if(this.pw1 == this.pw2){
              Toast("密码不一致，请检查后重新输入");
          }
      },
      isRight(){
          
      },
      changeYZM(){

          let arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
          for(i = 0; i<5; i++){
            
            let charNum = Math.floor(Math.random() * 62);//获取随机验证码下标
            yzm_code += codeChars[charNum];//根据下标获取指定字符并拼接
          
          }
          return this.yzm_code = yzm_code;
      }
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding-top: 50px;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F548a7d7e31bf9.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611743866&t=6018a0f6229362e20da34e1c3dc0776a");
  font-size: 20px;
  text-align: center;
}
span {
  display: inline-block;
  width: 90px;
  margin-left: 44px;
}
input {
  width: 310px;
  height: 40px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 6px;
}
button {
  margin-top: 120px;
  width: 140px;
  height: 40px;
  border-radius: 4px;
  border: none;
  padding-bottom: 50px;
  line-height: 40px;
  margin-bottom: 120px;
}
</style>

