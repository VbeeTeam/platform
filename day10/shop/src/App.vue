<template>
  <div id="app">
    <!-- 公共头部 -->
    <HeaderCom />
    <!-- 页面路由的占位 -->
    <router-view/>
    <!-- 公共底部 -->
    <FooterCom v-show="FooterBoolean" />
  </div>
</template>
<script>
import HeaderCom from "@/components/HeaderCom.vue"
import FooterCom from "@/components/FooterCom.vue"
export default {
  data(){
    return {
      FooterBoolean: true
    }
  },
  components: {
    HeaderCom,
    FooterCom
  },
  watch: { //路由监听在登录页隐藏公共底部
    "$route.path": function(newVal, oldVal){
        console.log(newVal, oldVal)
        if(newVal == "/login" || newVal == "/detail" || newVal == "/order" || newVal== "/about"){
          this.FooterBoolean = false
        }else{
          this.FooterBoolean = true
        }
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
