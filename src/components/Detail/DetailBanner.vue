<template>
<div>
    <div class="banner">
       <img 
       class="banner-img"
       src="http://p0.meituan.net/deal/89da71931d0bffe8d2e94540845768c178309.jpg">
    </div>
    <div class="detail-contaier">
        <h1>正兴鸡排</h1>
        <p>电话：11100111000</p>
        <p>地址：南昌市新建区889号</p>
        <p>营业时间：半夜12</p>
    </div>
    <div class="detail-item">
        <div class="detail-name">用户名</div>
        <div class="detail-time"></div>
        <div class="detail-comment"></div>
        <div class="detail-img">
            <img src="" alt="">
        </div>
    </div>
    <div class="detail-item">
        <div class="detail-name">用户名</div>
        <div class="detail-time"></div>
        <div class="detail-comment"></div>
        <div class="detail-img">
            <img src="" alt="">
        </div>
    </div>
    <div class="detail-item">
        <div class="detail-name">用户名</div>
        <div class="detail-time"></div>
        <div class="detail-comment"></div>
        <div class="detail-img">
            <img src="" alt="">
        </div>
    </div>
    <div class="detail-item">
        <div class="detail-name">用户名</div>
        <div class="detail-time"></div>
        <div class="detail-comment"></div>
        <div class="detail-img">
            <img src="" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
   .banner
     overflow hidden
     height 0
     padding-bottom 55%
   .banner-img
     width 100%
   .detail-contaier
     width 100%
     height 0
     padding-bottom 25%
     padding-left .2rem
     padding-top .3rem
     border-bottom .15rem solid #eee
   .detail-contaier
    h1
     font-size .35rem
     font-weight bold
     padding-bottom .2rem 
     color #888  
   .detail-contaier
    p
    line-height .32rem
    font-size .25rem
    color #888
   .detail-item
    width 100%
    height 0
    padding-bottom 45%
    border-bottom .1rem solid #eee
</style>