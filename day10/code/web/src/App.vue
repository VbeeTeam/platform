<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  // 定义属性
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      
    };
  },
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: url("assets/img/bg.png") no-repeat;
  background-size: 100% 100%;
}
.content {
    width: 1080px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
