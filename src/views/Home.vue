<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-content></home-content>
    <home-section></home-section>
    <home-footer></home-footer>
    <div>网站建设中.....</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeContent from '@/components/Home/HomeContent.vue'
import HomeSection from '@/components/Home/HomeSection.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeContent,
    HomeSection,
    HomeFooter
  }
}
</script>

<style lang="stylus">

</style>
