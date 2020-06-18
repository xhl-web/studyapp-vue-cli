<template>
  <div class="contentdata">
     <div class="header">
        <router-link to="/">
        <span class="iconfont header-icon">&#xe743;</span>
        </router-link>
        <span class="text">{{title.name}}</span>
       </div>
    <div class="search-input">
      搜索店铺
      <span class="iconfont search-icon">&#xe643;</span>
    </div>
     <div class="details">
            <router-link class="item" 
            tag="div"
            v-for="item of ContentInfo" 
            :key="item.id"
            :to="'/Detail/' + item.id"
            >
              <img :src="item.images[0]" class="item-img">
              <div class="details-text">
                <span>{{item.name}}</span>
                <span>电话：{{item.phone}}</span>
                <span>地址：{{item.address}}</span>
              </div>
              <div class="sales"><div class="sales-icon" style="width:.6rem;background-color:red;color: #fff;border-radius: 0.1rem;margin: 0.2rem 0.2rem;">{{item.score}}+</div></div>
            </router-link>
       </div> 
  </div>
</template>

<script>
export default {
    name: 'ContentDataHeader',
    props: {
      title: Object,
      ContentInfo: Array
    }
}
</script>

<style lang="stylus" scoped>
 @import '../../assets/styles/varibles.styl'
 .contentdata
   background #eee
   width 100%
   height 100%
  .header
    overflow hidden
    line-height .9rem
    text-align center
    color #fff
    background $bgcolor
    margin 0 auto
  .header-icon
    width: .64rem
    text-align center
    font-size: .5rem
    color: #fff
    float left 
  .text
    display block
    width 90%
  .search-input
    position relative
    background #ffffff
    width 90%
    margin .1rem auto
    line-height .6rem
    color: #888
    border-radius .08rem 
    padding-left .1rem
  .search-icon
    position absolute
    right .1rem
    font-size: 0.45rem
  .details
    height 14rem
  .item
    display flex
    width 100%
    border-top .01rem solid #eee
    background #fff
  .item-img
    width 1.5rem
    height 1.5rem
    padding 0.2rem
  .details-text
    color: #888
    margin auto
    height 100%
    flex-direction column
    display flex
    flex: 5
  .details-text
  span 
    line-height .35rem
  .sales
    flex: 1
</style>