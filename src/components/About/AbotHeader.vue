<template>
    <div class="header">
        <router-link to="/">
        <span class="iconfont header-icon">&#xe743;</span>
        </router-link>
        <span class="text">联系我们</span>
    </div>
</template>

<script>
export default {
    name: 'AboutHeader'
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