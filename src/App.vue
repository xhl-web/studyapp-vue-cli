//根组件
<template>
  <div id="app">
    <router-view></router-view>
    <div class="navbox">
      <div class="homenavs">
         <div class="home">
             <span class="iconfont">&#xe611;</span>
             <p>主页</p>
         </div>
         <div class="mynews">
             <span class="iconfont">&#xe773;</span>
             <p>消息</p>
         </div>
         <div class="aboutme">
             <span class="iconfont">&#xe648;</span>
             <p>联系我们</p>
         </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
   .navbox
      width: 100%
      position: fixed
      bottom: 0
      left:0
      background: #eee
      border-top: .05rem solid #ccc
    .homenavs
      display: flex
      text-align: center
    .home
      flex: 1
    .mynews
      flex: 1
    .aboutme
      flex: 1
    .iconfont
      font-size: .7rem
</style>