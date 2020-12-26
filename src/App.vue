<template>
  <div id="app">
      <Footer v-show="$store.state.isShowFooter"></Footer>
    <router-view/>
  </div>
</template>
<script>
import Footer from "@/components/Navigation/Footer";
export default {
   components:{
    Footer, 
  },
}
</script>
<style lang="scss">

</style>
