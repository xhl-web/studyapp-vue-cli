<template>
  <div>
    <home-header></home-header>
    <home-swiper :homeImgUrl="homeImgUrl"></home-swiper>
    <home-content :homeContent="homeContent" @chang="handleChangIndexInfo"></home-content>
    <home-section></home-section>
    <home-footer></home-footer>
  <div class="contentwihe"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
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
  },
  data () {
    return {
       homeImgUrl: [],
       homeContent: [],
       current: 0,
       homeSwiperUrl: []
    }
  },
  methods: {
     getHomeInfoImg () {
         axios.get('https://locally.uieee.com/slides').then(this.handleGetHomeInfoSucc)
     },
       handleGetHomeInfoSucc (res) {
         if(res.status == 200 && res.data){
             this.homeImgUrl = res.data
         }
      },
    getHomeInfoContent () {
      axios.get('https://locally.uieee.com/categories').then(this.handleGetHomeInfoSuccContent)
    },
    handleGetHomeInfoSuccContent (res) {
         if(res.status == 200 && res.data) {
           this.homeContent = res.data
         }
    },
       getHomeContentIndex () {

    },
    handleChangIndexInfo (index) {
      this.current = index
      this.$emit('changes',this.current + 1 )
      axios.get(`https://locally.uieee.com/categories/${this.current + 1 }/shops`).then(this.getHomeContentIndex)
    }
  },
  mounted () {
    this.getHomeInfoImg()
    this.getHomeInfoContent()
  }
}
</script>

<style lang="stylus">
   .contentwihe
     width 100%
     height .2rem
</style>
