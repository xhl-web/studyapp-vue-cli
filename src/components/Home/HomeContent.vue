<template>
  <div class="content">
    <router-link to="/ContentData" class="content">
     <div class="content-item" v-for="(item,index) of HomeContentIconUrlList" :key="item.id" @click="handleIdexClick(index)">
         <img class="content-img" :src="item.icon">
         <span class="text">{{ item.name }}</span>
     </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
     homeContent: Array
  },
  data () {
    return {
       HomeContentIconUrlList:
  [{
    "id": 1,
    "name": "美食",
    "icon": "images/grid-01.png"
  },
  {
    "id": 2,
    "name": "洗浴足疗",
    "icon": "images/grid-02.png"
  },
  {
    "id": 3,
    "name": "结婚啦",
    "icon": "images/grid-03.png"
  },
  {
    "id": 4,
    "name": "卡拉OK",
    "icon": "images/grid-04.png"
  },
  {
    "id": 5,
    "name": "找工作",
    "icon": "images/grid-05.png"
  },
  {
    "id": 6,
    "name": "辅导班",
    "icon": "images/grid-06.png"
  },
  {
    "id": 7,
    "name": "汽车保养",
    "icon": "images/grid-07.png"
  },
  {
    "id": 8,
    "name": "租房",
    "icon": "images/grid-08.png"
  },
  {
    "id": 9,
    "name": "装修",
    "icon": "images/grid-09.png"
  }
]}
  },
  methods: {
    handleIdexClick (index) {
      this.$emit('chang',index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    overflow hidden
    width: 100%
    height: 0
    padding-bottom: 100%
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