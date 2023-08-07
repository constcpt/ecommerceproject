<template>
    <div class="nearby">
        <h3 class="nearby__title">Nearby Shops</h3>
        <div
         class="nearby__shop"
         v-for="item in nearbyList"
         :key="item.id"
         >
            <img :src="item.imgUrl" class="nearby__shop__img">
            <div class="nearby__content">
                <div class="nearby__content__title">{{ item.title }}</div>
                <div class="nearby__content__tags">
                    <span
                        class="nearby__content__tag"
                        v-for="(innerItem, innerIndex) in item.tags"
                        :key="innerIndex"
                    >{{ innerItem }}</span>
                </div>
                <p class="nearby__content__highlight">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NearbyShops',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'https://i.imgur.com/LMzplaf.png',
      title: 'Coles',
      tags: ['A', 'B', 'C'],
      desc: 'Good things are happening at Coles!'
    }, {
      id: 2,
      imgUrl: 'https://i.imgur.com/FPLfdoB.png',
      title: 'Woolworths',
      tags: ['A', 'B', 'C'],
      desc: 'Bring a little good to everyone, everyday.'
    }, {
      id: 3,
      imgUrl: 'https://i.imgur.com/FPLfdoB.png',
      title: 'Woolworths',
      tags: ['A', 'B', 'C'],
      desc: 'Bring a little good to everyone, everyday.'
    }, {
      id: 4,
      imgUrl: 'https://i.imgur.com/FPLfdoB.png',
      title: 'Woolworths',
      tags: ['A', 'B', 'C'],
      desc: 'Bring a little good to everyone, everyday.'
    }]
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.nearby {
    &__title {
        margin: .16rem 0 .02rem 0;
        font-size: .18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }

    &__shop {
        display: flex;
        padding-top: .12rem;

        &__img {
            margin-right: .16rem;
            width: .56rem;
            height: .56rem;
        }
    }

    &__content {
        flex: 1;
        padding-bottom: .12rem;
        border-bottom: 1px solid $content-bgColor;

        &__title {
            line-height: .22rem;
            font-size: .16rem;
            color: $content-fontcolor;
        }

        &__tags {
            margin-top: .08rem;
            line-height: .18rem;
            font-size: .13rem;
            color: $content-fontcolor;
        }

        &__tag {
            margin-right: .16rem;
        }

        &__highlight {
            margin: .08rem 0 0 0;
            line-height: .18rem;
            font-size: .13rem;
            color: #E93B3B;
        }
    }

}
</style>
