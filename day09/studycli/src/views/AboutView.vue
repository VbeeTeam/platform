<template>
  <div class="about">
    <!-- 父组件About给子组件传递数据 -->
    <!-- 通过v-bind绑定自定义属性=传递的数据 -->
    <!-- 子组件公共头部 -->
    <!-- 子组件接收父组件传递的数据通过v-on绑定子组件映射过来的事件sonData进行接收 -->
    <HeaderCom :tit="title" @sonData="fromSonData"/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import HeaderCom from "../components/HeaderCom.vue"
export default {
  components: {
    HeaderCom
  },
  data() {
    return {
      title: "标题数据"
    }
  },
  methods: {
    // 默认参数就是传递的数据
    fromSonData(val){
      console.log("子组件传递过来的数据：",val)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
