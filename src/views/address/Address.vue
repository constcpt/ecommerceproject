<template>
    <div class="wrapper">
      <div class="title">
        My addresses
        <span class="title__create">New</span>
      </div>
    </div>
    <DockerBar :currentIndex="3"/>
  </template>
  
  <script>
  import DockerBar from '../../components/DockerBar'
  
  export default {
    name: 'Address',
    components: { DockerBar },
    setup() {
      return {}
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../../style/variables.scss';
  @import '../../style/mixins.scss';
  .wrapper {
    overflow-y: auto;
    @include fix-content;
    background: $darkBgColor;
  }
  .title {
    position: relative;
    @include title;
    &__create {
      position: absolute;
      right: .18rem;
      font-size: .14rem;
    }
  }
  </style>
  