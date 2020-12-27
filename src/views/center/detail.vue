<template>
  <div>
        <div class="left iconfont icon-right" @click="goBack"></div>
  </div>
</template>
<script>
import "@/assets/ieon/iconfont.css";
import url from "@/config/uri";
export default {
  name: "detail",
  data() {
    return {};
  },
  created() {
    this.$http
      .get(url.getHome + `?val=${this.$route.params.val}`)
      .then((ret) => {
        console.log(ret);
      });
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy() {
    this.$store.commit("isShowFooter", true);
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>

  .left {
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