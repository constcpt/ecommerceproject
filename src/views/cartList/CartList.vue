<template>
  <div class="wrapper">
    <div class="title">Shopping Cart</div>
    <div 
      class="cart"
      v-for="(cart, key) in list"
      :key="key"
      @click="() => handleCartClick(key)"
    >
      <div className="cart__title">{{cart.shopName}}</div>
      <div class="cart__item" v-for="(product, innerKey) in cart.productList" :key="innerKey">
        <img class="cart__image" :src="product.imgUrl" />
        <div class="cart__content">
          <p class="cart__content__title">{{product.name}}</p>
          <p class="cart__content__price">
            <span class="yen">&dollar;</span>{{product.price}} X {{product.count}}
            <span class="cart__content__total">
              <span class="yen">&dollar;</span>{{(product.price * product.count).toFixed(2)}}
            </span>
          </p>
        </div>
      </div>
      <div class="cart__total">
        Item Number: {{cart.total}}
      </div>
    </div>
    <div
      v-if="Object.keys(list).length === 0"
      class="empty"
    >No cart data</div>
  </div>
  <DockerBar :currentIndex="1"/>
</template>

<script>
import DockerBar from '../../components/DockerBar';
import { useRouter } from 'vue-router';

export default {
  name: 'CartList',
  components: { DockerBar },
  setup() {
    const list = JSON.parse(localStorage.cartList || '[]');
    // 计算购物车总件数的逻辑
    for(let i in list) {
      const cart = list[i];
      const productList = cart.productList;
      let total = 0;
      for(let j in productList) {
        const product = productList[j];
        total += product['count'];
      }
      cart.total = total;
    }
    // 处理点击
    const router = useRouter();
    const handleCartClick = (key) => {
      router.push(`/orderConfirmation/${key}`);
    }
    return { list, handleCartClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: rgb(248, 248,248);
}
.title {
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.cart {
  margin: .16rem;
  padding-bottom: .16rem;
  background: $bgColor;
  &__title {
    padding: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipsis;
  }
  &__item {
    display: flex;
    padding: 0 .16rem .16rem .16rem;
  }
  &__image {
    margin-right: .16rem;
    width: .46rem;
    height:.46rem;
  }
  &__content {
    flex: 1;
    .yen {
      font-size: .12rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      float: right;
      color: $dark-fontColor;
    }
  }
  &__total {
    line-height: .28rem;
    margin: 0 .16rem;
    color: $light-fontColor;
    font-size: .14rem;
    text-align: center;
    background: $search-bgColor;
  }
}
.empty {
  @include empty;
}
</style>