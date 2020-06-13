<template>
  <div class="footer">
      <img src="/images/logo.png" class="logo">
      <p>隐私政策 | 投稿指南 | 联系我们 | 网站地图 </p>
      <ul>
          <li><img src="/images/ft-ghs.png"><a href="http://www.beian.miit.gov.cn/">网站备案号：赣ICP备20007590号-1</a></li>
          <li><a href="https://mail.qq.com">联系邮箱：1303050061@qq.com</a></li>
          <li><a href="https://github.com/xhl-web/">github地址：https://github.com/xhl-web/</a></li>
          <li><a href="#">本站内容来源于网络，如有侵权联系我们</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
.footer
  height: 2.7rem
  background-color #eee
  padding-top: .3rem
.footer
p
     text-align: center
     color: #888
     padding-bottom: .2rem
     font-size: .25rem
  .footer
  ul
  li
  a
     text-align: center
     color: #888
     padding-bottom: .15rem
     font-size: .23rem
  .logo
     width: .7rem
     height: .5rem
     position: absolute
     left: .56rem
</style>