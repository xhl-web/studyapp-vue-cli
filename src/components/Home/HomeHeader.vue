<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
       <span class="iconfont back-icon">&#xe743;</span>
      </router-link>
    </div>
    <div class="header-text">本地生活宝</div>
  <router-link to="/City">
    <div class="header-right">南昌
      <span class="iconfont bouttom-icon">&#xe6aa;</span>
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .9rem
    text-align: center
    background-color: $bgcolor
    color: #fff
  .header-left
    width: .64rem
    float: left
  .back-icon
    font-size: .5rem
    color: #fff
  .header-text
    flex: 1
  .header-right
    width: 1.24rem
    float: right
    color: #fff
  .bouttom-icon
    font-size: .3rem
    color: #fff
</style>
