<template>
  <div class="home wrap">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
      <van-swipe-item v-for="(item, index) in homeData.swiperList" :key="index">
        <img :src="item.imgurl" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航宫格布局 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="item in homeData.navList"
        :key="item.categoryId"
        :url="item.href"
      >
        <img class="navImg" :src="item.imgUrl" />
        <span class="navName">{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 新品上线 -->
    <h3>新品上线</h3>
    <van-grid class="list" :column-num="2">
      <van-grid-item v-for="item in homeData.newGoodses" :key="item.goodsId" :to="{name: 'detail', params: item}">
        <img :src="item.goodsCoverImg" alt="" />
        <h5>{{ item.goodsName }}</h5>
        <span>￥{{ item.sellingPrice }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 热门商品 -->
    <h3>热门商品</h3>
    <van-grid class="list" :column-num="2">
      <van-grid-item v-for="item in homeData.hotGoodses" :key="item.goodsId" :to="{name: 'detail', params: item}">
        <img :src="item.goodsCoverImg" alt="" />
        <h5>{{ item.goodsName }}</h5>
        <span>￥{{ item.sellingPrice }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import homeData from "../../data/data.json";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      homeData,
    };
  },
  created() {
    console.log(homeData);
  },
};
</script>
<style lang="less" scoped>
.home {
  .my-swipe {
    .van-swipe-item {
      width: 100%;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .navImg {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  .navName {
    font-size: 14px;
    color: #000;
  }
  h3 {
    font-size: 16px;
    color: #1baeae;
    text-align: center;
    background: #f9f9f9;
    padding: 15px 0;
    font-weight: normal;
  }
  .list{
    text-align: center;
    img{
      width: 100px;
      height: 100px;
    }
    h5{
      font-size: 14px;
      color: #000;
      font-weight: normal;
      margin: 10px 0;
    }
    span{
      font-size: 14px;
      color: #1baeae;
    }
  }
}
</style>
