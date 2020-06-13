<template>
  <div class="content">
     <div class="content-item" v-for="item of ContentList" :key="item.id">
         <img class="content-img" :src="item.url">
         <span class="text">{{item.text}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data (){
    return {
      ContentList: [{
        id: '0001',
        url: '/images/grid-01.png',
        text: '美食'
      },{
        id: '0002',
        url: '/images/grid-02.png',
        text: '洗浴足疗'
      },{
        id: '0003',
        url: '/images/grid-03.png',
        text: '结婚啦'
      },{
        id: '0004',
        url: '/images/grid-04.png',
        text: 'KTV'
      },{
        id: '0005',
        url: '/images/grid-05.png',
        text: '找工作'
      },{
        id: '0006',
        url: '/images/grid-06.png',
        text: '辅导班'
      },{
        id: '0007',
        url: '/images/grid-07.png',
        text: '汽车保养'
      },{
        id: '0008',
        url: '/images/grid-08.png',
        text: '租房'
      },{
        id: '0009',
        url: '/images/grid-09.png',
        text: '装修'
      }]
    }
  }
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
    border-bottom: 0.07rem solid #f0f0f0
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