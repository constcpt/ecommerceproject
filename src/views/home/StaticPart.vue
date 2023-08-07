<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
        UTS Housing, Yura Mudang residence, 1733D, 702-730 Harris Street, Ultimo NSW 2007, Australia
        <span class="iconfont position__notice">&#xe679;</span>
    </div>
    <div class="search">
        <span class="iconfont">&#xe65c;</span>
        <span class="search__text">Search for discounts</span>
    </div>
    <div class="banner">
        <img class="banner__img" src="https://i.imgur.com/xJcyBnF.png">
    </div>
    <div class="icons">
        <div class="icons__item" v-for="item in iconsList" :key="item.id">
            <img class="icons__item__img" :src="item.imgUrl" />
            <p class="icons__item__desc">{{ item.desc }}</p>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      {
        id: 1,
        imgUrl: 'https://i.imgur.com/4dmmcQN.png',
        desc: 'best seller'
      },
      {
        id: 2,
        imgUrl: 'https://i.imgur.com/fkV7IGy.png',
        desc: 'clothes'
      },
      {
        id: 3,
        imgUrl: 'https://i.imgur.com/pptLZJ6.png',
        desc: 'commodity'
      },
      {
        id: 4,
        imgUrl: 'https://i.imgur.com/dMIKAZ6.png',
        desc: 'dissert'
      },
      {
        id: 5,
        imgUrl: 'https://i.imgur.com/25NYG8C.png',
        desc: 'food'
      },
      {
        id: 6,
        imgUrl: 'https://i.imgur.com/YAMiKhP.png',
        desc: 'gift'
      },
      {
        id: 7,
        imgUrl: 'https://i.imgur.com/aW0iptA.png',
        desc: 'jewelry'
      },
      {
        id: 8,
        imgUrl: 'https://i.imgur.com/bVbnnnZ.png',
        desc: 'laptop'
      },
      {
        id: 9,
        imgUrl: 'https://i.imgur.com/FtI6xxi.png',
        desc: 'stationery'
      },
      {
        id: 10,
        imgUrl: 'https://i.imgur.com/MKuVhvw.png',
        desc: 'used'
      }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    @include ellipsis;

    .position__icon {
        position: relative;
        top: .01rem;
        font-size: .2rem;
    }

    .position__notice {
        position: absolute;
        top: .17rem;
        right: 0;
        font-size: .2rem;
    }

    color: $content-fontcolor;
}

.search {
    margin-bottom: .12rem;
    line-height: .32rem;
    width: 3.39rem;
    background: #F5F5F5;
    color: #B7B7B7;
    border-radius: .16rem;

    .iconfont {
        display: inline-block;
        padding: 0 .08rem 0 .16rem;
        font-size: .16rem;
    }

    &__text {
        display: inline-block;
        font-size: .14rem;
    }
}

.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 40%; // 作用是撑开高度，让图片节流显示时不会有抖动

    &__img {
        width: 100%;
        border-radius: .06rem;
    }
}

.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;

    &__item {
        width: 20%;

        &__img {
            display: block;
            width: .4rem;
            height: .4rem;
            margin: 0 auto;
        }

        &__desc {
            margin: .06rem 0 .16rem 0;
            text-align: center;
            color: $content-fontcolor;
        }
    }
}

.gap {
    margin: 0 -.18rem;
    height: .1rem;
    background: $content-bgColor;
}
</style>
