<template>
  <div id="app">
      <Footer v-show="$store.state.isShowFooter"></Footer>
    <router-view/>
  </div>
</template>
<script>
import Footer from "@/components/Navigation/Footer";
export default {
  data () {
    return {
     
    }
  },
   components:{
    Footer, 
  },
  created () {
    this.$http.get("http://127.0.0.1:80/getAirPortInfo.php",{page:1,cateid:78})
  }
}
</script>
<style lang="scss">

</style>
