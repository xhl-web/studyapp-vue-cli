<template>
 <div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
    </swiper-slide>
  </swiper>
 </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
           swiperOptions: {
               pagination: '.swiper-pagination',
               autoplay: 4000,
               loop: true
           },
           swiperList: [{
               id: '001',
               url: '/images/banner-01.png'
           },{
               id: '002',
               url: '/images/banner-02.png'
           }]
        }
    }
}
</script>

<style lang="stylus" scoped>
 .wrapper>>>.swiper-pagination-bullet-active
   background: #fff
 .wrapper
   overflow: hidden
   width: 100%
   height:0
   padding-bottom: 40%
   background: #eee
 .swiper-img
   width: 100%
</style>