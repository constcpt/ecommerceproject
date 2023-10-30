<template>
  <div class="content">
    <div class="category">
      <!-- <div class="category__item category__item--active">Products</div>
      <div class="category__item">Fruits</div>
      <div class="category__item">Seafood</div> -->
      <div :class="{
        category__item: true,
        'category__item--active': currentTab === item.tab,
      }" v-for="item in categories" :key="item.name" @click="() => handleTabClick(item.tab)">
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">
            Monthly sales {{ item.sales }} items
          </p>
          <p class="product__item__price">
            <span class="product__item__yen">&dollar;</span>{{ item.price }}
            <span class="product__item__origin">&dollar;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus"
            @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }">-</span>
          {{ getProductCartCount(shopId, item._id) }}
          <span class="product__number__plus"
            @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }">+</span>
        </div>
      </div>
      <!-- <div class="product__item">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue';
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { get } from "../../utils/request";
import { useCommonCartEffect } from '../../effects/cartEffects';

const categories = [
  { name: "Products", tab: "all" },
  { name: "Fruits", tab: "fruit" },
  { name: "Seafood", tab: "seafood" },
];

// Tab 切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};

// 列表内容相关的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  // const route = useRoute();
  // const shopId = route.params.id;
  const content = reactive({ list: [] });
  // 获取列表数据
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };
  watchEffect(() => {
    getContentData();
  });
  const { list } = toRefs(content);
  return { list };
};

// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { cartList, changeCartItem, getProductCartCount }
}

export default {
  name: "Content",
  props: ["shopName"], // 父组件向子组件传递数据要通过 props 来接收
  setup() {
    // const categories = [
    //   {
    //     name: "Products",
    //     tab: "all",
    //   },
    //   {
    //     name: "Fruits",
    //     tab: "fruit",
    //   },
    //   {
    //     name: "Seafood",
    //     tab: "seafood",
    //   },
    // ];
    // const data = reactive({
    //   currentTab: categories[0].tab,
    //   contentList: [],
    // });
    // const getContentData = async (tab) => {
    //   const result = await get("/api/shop/1/products", { tab });
    //   if (result?.errno === 0 && result?.data?.length) {
    //     data.contentList = result.data;
    //   }
    // };
    // const handleCategoryClick = (tab) => {
    //   getContentData(tab);
    //   data.currentTab = tab;
    // };
    // getContentData("all");
    // const { contentList, currentTab } = toRefs(data);
    // return { categories, currentTab, contentList, handleCategoryClick };
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { changeCartItem, cartList, getProductCartCount } = useCartEffect()

    return {
      categories, currentTab, handleTabClick, list,
      shopId, changeCartItem, cartList, getProductCartCount
    }
  }
};
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
    font-size: .14rem;
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
      line-height: 0.2rem;
      font-size: 0.14rem;
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
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }

    &__yen {
      font-size: 0.12rem;
    }

    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
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
}</style>
