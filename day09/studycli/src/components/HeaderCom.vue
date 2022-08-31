// 公共头部组件
<template>
  <header>
      <h1>{{ $route.meta.title }}页面头部</h1>
      <h3>父组件的数据：{{ tit }}</h3>
      <!-- 子组件给父组件传参通过映射事件传参 -->
      <button @click="toFather">给父组件传参</button>
  </header>
</template>
<script>
export default {
  // 子组件props属性接收父组件传递过来的数据
  // props:["tit"]
  props: {
    tit: {
      type: String,
      default: "未传"
    }
  },
  methods: {
    // 通过映射一个$emit事件进行传参 （自定义事件名称,传递的数据）
    toFather() {
      this.$emit("sonData", "我是子组件的数据")
    }
  }
}
</script>

<style>

</style>