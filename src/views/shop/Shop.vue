<template>
  <div class="wrapper">
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
export default {
    name: 'Shop',
    components: { ShopInfo },
    setup() {
    const item = {
      _id: '1',
      name: 'Coles',
      imgUrl: "https://i.imgur.com/LMzplaf.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "Good things are happening at Coles!"
    }
    return { item }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
</style>