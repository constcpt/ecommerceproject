<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div 
          class="iconfont top__header__back"
          @click="handleBackClick"
        >&#xe600;</div>
        Confirm Order
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">Delivery Address</div>
        <div class="top__receiver__address">UTS Housing, 1733D</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">Mr. Li Li</span>
          <span class="top__receiver__info__name">0421204237</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe600;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">
        {{ shopName }}
      </div>
      <div class="products__wrapper">
        <div class="products__list">
          <template
            v-for="item in productList"
            :key="item._id"
          >
            <div 
              class="products__item" 
              v-if="item.count > 0"
              >
              <img class="products__item__img" :src="item.imgUrl" />
              <div class="products__item__detail">
                <h4 class="products__item__title">{{ item.name }}</h4>
                <p class="products__item__price">
                  <span>
                    <span class="products__item__yen">&dollar; </span>
                    {{ item.price }} x {{ item.count }}
                  </span>
                  <span class="products__item__total">
                    <span class="products__item__yen">&dollar; </span>
                    {{ item.price * item.count }}
                  </span>
                </p>
              </div>
            </div>
          </template>
          
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order__price">Pay <b>&dollar;{{calculations.price}}</b></div>
      <div class="order__btn">Submit</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useCommonCartEffect } from "../../effects/cartEffects";

export default {
  name: "OrderConfirmation",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, calculations, productList } = useCommonCartEffect(shopId);
    const handleBackClick = () => { router.back() };
    return { shopName, calculations, productList, handleBackClick }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: hidden;
}

.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;

    &__back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }

  &__receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: 0.04rem;

    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
    }

    &__address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      font-size: 0.14rem;
      color: #333;
    }

    &__info {
      padding: 0.06rem 0 0 0.16rem;

      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }

    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.2rem;
    }
  }
}

.products {
  margin: 0.16rem 0.18rem 0.55rem 0.18rem;
  background: #fff;

  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
    font-weight: bold;
    color: #333;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
  &__list {
    background: #FFF;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;

    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }

    &__detail {
      flex: 1;
    }

    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }

    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }

    &__yen {
      font-size: 0.12rem;
    }
  }
}

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: #FFF;
  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333;
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
</style>
