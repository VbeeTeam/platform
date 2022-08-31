<template>
  <div class="cart">
      <h3>我是购物车页面</h3>
      <h3>第二个</h3>
      <!-- 3.调用导入的组件 -->
      <HelloWorld :msg="str" />
      <Footer />
  </div>
</template>

<script>
//1.导入公共组件文件路径
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer"

export default {
  // 定义属性
  name:'Cart',
  components: { //2.注册导入的组件
    HelloWorld,
    Footer
  },
  data() {
    return {
      str: "我是购物车传过来的"
    }
  },
  methods: {
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
}
</script>
// scoped 私有样式属性
<style lang='scss' scoped>
  .cart{
      background-color: yellow;
      h3{
          color: red;
          &:nth-child(2){
              color: pink;
          }
      }

  }
</style>