<template>
    <div class="header">
        <router-link to="/ContentData">
        <span class="iconfont header-icon">&#xe743;</span>
        </router-link>
        <span class="text">详情页</span>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader'
}
</script>


<style lang="stylus" scoped>
 @import '../../assets/styles/varibles.styl'
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
</style>