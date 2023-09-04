<template>
    <div class="wrapper">
        <StaticPart />
        <NearbyShops />
    </div>
    <DockerBar :currentIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearbyShops from './NearbyShops.vue'
import DockerBar from '../../components/DockerBar.vue'
export default {
  name: 'HomePage',
  components: {
    StaticPart,
    NearbyShops,
    DockerBar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .5rem;
    padding: 0 .18rem .1rem .18rem;
}

</style>
