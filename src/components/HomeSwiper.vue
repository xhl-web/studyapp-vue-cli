<template>
 <div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
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
               url: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg'
           },{
               id: '002',
               url: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg'
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
   padding-bottom: 36%
   background: #eee
 .swiper-img
   width: 100%
   height: 2.7rem
</style>