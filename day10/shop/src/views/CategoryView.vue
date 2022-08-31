<template>
  <div class="category wrap">
    <!-- 左侧导航切换 -->
    <van-sidebar v-model="activeKey" @change="changeSidebar">
      <van-sidebar-item
        v-for="item in categoryData.data"
        :key="item.goodsId"
        :title="item.goodsName"
      />
    </van-sidebar>
    <!-- 右侧商品展示 -->
    <div class="right">
      <div
        class="list"
        v-for="item in list.secondLevelCategoryVOS"
        :key="item.goodsId"
      >
        <h5>{{ item.goodsName }}</h5>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="item2 in item.thirdLevelCategoryVOS"
            :key="item2.goodsId"
            :to="{name: 'detail', params: item2}"
          >
            <img :src="item2.goodsCoverImg" alt="" />
            <span>{{ item2.goodsName }}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import categoryData from "../../data/category.json";
export default {
  data() {
    return {
      activeKey: 0,
      categoryData,
      list: categoryData.data[0],
    };
  },
  methods: {
    //   根据下标取出对应的分类数据
      changeSidebar(index){
          console.log(index)
          this.list = categoryData.data[index]
      }
  },
  created() {
    console.log(categoryData);
  },
};
</script>

<style lang="less" scoped>
.category {
  .van-sidebar {
    width: 120px;
    position: fixed;
  }
  .right {
    width: 255px;
    position: absolute;
    right: 0;
    top: 46px;
    padding-bottom: 50px;
    h5{
        font-size: 16px;
        padding: 15px;
    }
    img{
        width: 50px;
        height: 50px;
    }
    span{
        font-size: 14px;
        color: #000;
    }
  }
}
</style>