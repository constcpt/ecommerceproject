<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">Products</div>
      <div class="category__item">Fruits</div>
      <div class="category__item">Drinks</div>
      <div class="category__item">Meat</div>
      <div class="category__item">Seafood</div>
      <div class="category__item">Bakery</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          0
          <span class="product__number__plus">+</span>
        </div>
      </div>
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
      </div>
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
      </div>
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
      </div>
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
      </div>
      <div class="product__item">
        <img class="product__item__img" src="https://i.imgur.com/BFCNUeA.png" />
        <div class="product__item__detail">
          <h4 class="product__item__title">Orange 500g</h4>
          <p class="product__item__sales">Monthly sales 30 items</p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>33.6
            <span class="product__item__origin">&dollar;66.6</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.7rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: hidden;

  height: 100%;
  width: 0.76rem;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
