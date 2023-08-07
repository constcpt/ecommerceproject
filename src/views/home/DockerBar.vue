<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      :key="item.icon"
    >
      <!-- v-html 指令可以不让 item.icon 对应的字符被转义-->
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DockerBar',
  // Composition API
  setup () {
    const dockerList = [
      { icon: '&#xe609;', text: 'Home' },
      { icon: '&#xe6af;', text: 'Cart' },
      { icon: '&#xe61e;', text: 'Orders' },
      { icon: '&#xe6b3;', text: 'My' }
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
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
