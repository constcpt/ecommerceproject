<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      :key="item.icon"
    >
      <router-link :to='item.to'>
        <!-- v-html 指令可以不让 item.icon 对应的字符被转义-->
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DockerBar',
  // Composition API
  setup () {
    const dockerList = [
      { icon: '&#xe609;', text: 'Home', to: { name: 'Home' } },
      { icon: '&#xe6af;', text: 'Cart', to: { name: 'CartList' } },
      { icon: '&#xe61e;', text: 'Orders', to: { name: 'Home' } },
      { icon: '&#xe6b3;', text: 'My', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;

  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }

    &--active {
      a {
        color: #1FA4FC;
      }
    }
  }

  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
