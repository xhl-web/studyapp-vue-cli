<template>
  <div>
    <home-swiper></home-swiper>
    <home-content></home-content>
    <div>网站建设中.....</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeContent from '@/components/Home/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeContent
  }
}
</script>

<style lang="stylus">

</style>
