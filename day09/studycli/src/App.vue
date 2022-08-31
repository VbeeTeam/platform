// 在App.vue根组件中写的结构样式在所有的页面级组件中都会起作用
<template>
  <div id="app">
    <!-- 页面级组件的占位 -->
    <router-view/>
    <!-- 公共组件底部 -->
    <FooterCom />
    <h3>我是App根组件</h3>
  </div>
</template>
<script>
import FooterCom from "./components/FooterCom.vue"
export default {
  components: {
    FooterCom
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
