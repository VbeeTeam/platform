<template>
  <div class="detail wrap">
    <img :src="productObj.goodsCoverImg" alt="" />
    <h4>{{ productObj.goodsName }}</h4>
    <p>{{ productObj.goodsIntro }}</p>
    <span>￥{{ productObj.sellingPrice }}</span>
    <van-goods-action>
      <van-goods-action-button
        color="#be99ff"
        type="warning"
        text="加入购物车"
        @click="toCart"
      />
      <van-goods-action-button
        color="#7232dd"
        type="danger"
        text="立即购买"
        @click="toOrder"
      />
    </van-goods-action>
    <!-- 密码输入框 -->
    <van-password-input
      v-show="moneyBoolean"
      :value="value"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-show="moneyBoolean"
      v-model="value"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      productObj: {},
      value: "",
      errorInfo: "",
      showKeyboard: true,
      moneyBoolean: false,
    };
  },
  methods: {
    toCart() {
      // 将当前商品数据加入购物车中
      // 从vuex中取出原有的购物车数据，在添加新的商品数据到购物车
      var arr = this.$store.state.cartList;
      // 循环对比添加相同的商品时数量默认+1
      for (let i = 0; i < arr.length; i++) {
        //   如果有相同商品会执行这一步
        if (this.productObj.goodsId == arr[i].goodsId) {
          arr[i].num += 1;
          this.$store.commit("mutationsCartList", arr);
          this.$router.push({ path: "/cart" });
          return;
        }
      }
      // 如果没有相同商品会执行这一步
      this.productObj.num = 1;
      arr.push(this.productObj);
      this.$store.commit("mutationsCartList", arr);
      this.$router.push({ path: "/cart" });
    },
    // 跳转订单
    toOrder() {
      Dialog.confirm({
        title: "提示",
        message: "您确认购买该商品吗",
      })
        .then(() => {
          // on confirm
          if(localStorage.getItem("userInfo")){
             this.moneyBoolean = true;
          }else{
            this.$router.push({path: '/login'})
          }
        })
        .catch(() => {
          // on cancel
        });
      // this.$router.push({path: '/order'})
    },
  },
  watch: {
    value(value) {
      if (value.length === 6 && value !== "123456") {
        this.errorInfo = "密码错误";
      } else if (value.length === 6 && value === "123456") {
        // 保存订单数据
        var oldList = this.$store.state.orderList;
        this.productObj.num = 1
        oldList.push(this.productObj)
        this.$store.commit("mutationsOrderList", oldList);
        this.$router.push({ path: "/order" });
      } else {
        this.errorInfo = "";
      }
    },
  },
  created() {
    console.log(this.$route);
    if (this.$route.params.goodsId) {
      this.$store.commit("mutationsDetailInfo", this.$route.params);
    }
    this.productObj = this.$store.state.detailInfo;
    console.log(this.productObj);
  },
};
</script>
<style lang="less" scoped>
.detail {
  padding: 66px 15px;
  img {
    display: block;
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
  h4 {
    font-size: 16px;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    color: #1baeae;
  }
}
</style>