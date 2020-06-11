<template>
  <div class="content">
     <div class="content-item">
         <img class="content-img" src="/images/grid-01.png">
         <span class="text">美食</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-02.png">
         <span class="text">洗浴足疗</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-03.png">
         <span class="text">结婚啦</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-04.png">
         <span class="text">ktv</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-05.png">
         <span class="text">找工作</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-06.png">
         <span class="text">辅导班</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-07.png">
         <span class="text">汽车保养</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-08.png">
         <span class="text">租房</span>
     </div>
     <div class="content-item">
         <img class="content-img" src="/images/grid-09.png">
         <span class="text">装修</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style lang="stylus" scoped>
  .content
    width: 100%
    display: flex
    flex-wrap: wrap
    background-color: #fff
    font-size: .28rem
    color: #888
    border-top: 0.02rem solid #eee
    border-left: 0.02rem solid #eee
    .content-item
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 33.333333%
      height: 2.5rem
      border-right: 0.02rem solid #eee
      border-bottom: 0.02rem solid #eee
      box-sizing: border-box
      .content-img
        width: .7rem
        height: .7rem
      .text
       margin-top: .23rem

</style>