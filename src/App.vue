//根组件
<template>
  <div id="app">
    <router-view></router-view>
    <div class="navbox">
      <div class="homenavs">
        <router-link to="/" class="flex-1">
            <div class="home">
               <span class="iconfont">&#xe611;</span>
               <p class="text">主页</p>
             </div>
         </router-link>
         <router-link to="/Mynews" class="flex-1">
           <div class="mynews">
               <span class="iconfont">&#xe773;</span>
               <p class="text">消息</p>
           </div>
         </router-link>
         <router-link to="/About" class="flex-1">
            <div class="aboutme">
                <span class="iconfont">&#xe648;</span>
                <p class="text">联系我们</p>
            </div>
         </router-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {

}
</script>
<style lang="stylus" scoped>
   .navbox
      width: 100%
      position: fixed
      bottom: 0
      left:0
      background: #eee
      border-top: .023rem solid #ccc
    .homenavs
      display: flex
      text-align: center
    .flex-1
     flex: 1
    .iconfont
      font-size: .7rem
    .text
      color: #222
    .router-link-exact-active
      color: #f4a460
</style>