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
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  .content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.7rem;
    bottom: .5rem;
  }
  .category {
    overflow-y: hidden;
    
    height: 100%;
    width: .76rem;
    background: #F5F5F5;
    &__item {
      line-height: .4rem;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #333;
      &--active {
        background: #FFF;
      }
    }
  }
  .product {
    overflow-y: scroll;
    flex: 1;
    &__item {
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #F1F1F1;
      &__img {
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__title {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: #333;
      }
      &__sales {
        margin: .06rem 0;
        font-size: .12rem;
        color: #333;
      }
      &__price {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: #E93B3B;
      }
      &__yen {
        font-size: .12rem;
      }
      &__origin {
        margin-left: .06rem;
        line-height: .2rem;
        font-size: .12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
  </style>
  