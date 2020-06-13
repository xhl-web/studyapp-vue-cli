<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="搜索城市">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
 @import '../../assets/styles/varibles.styl'
   .search
     height .72rem
     padding 0 .1rem
     background $bgcolor
   .search-input
    box-sizing border-box
    width 100%
    line-height .62rem
    text-align center
    border-radius .06rem
    color: #666
</style>