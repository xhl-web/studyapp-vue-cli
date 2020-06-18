<template>
  <div>
     <content-data-header :title="title" :ContentInfo="ContentInfo"></content-data-header>
  </div>
</template>

<script>
import axios from 'axios'
import ContentDataHeader from '@/components/ContentData/ContentDataHeader.vue'

export default {
  name: 'ContentData',
  props: {
        current: Number,
    },
    data () {
      return {
        title: {},
        ContentInfo: []
      }
    },
  components: {
    ContentDataHeader
  },
    methods: {
      getContentTitleSuecc (res) {
            this.title = res.data
        },
        getContentTitle () {
            axios.get(`https://locally.uieee.com/categories/${this.current}`).then(this.getContentTitleSuecc)
        },
        getContentInfoSuecc (res) {
             this.ContentInfo = res.data
        },
        getContentInfoData () {
          axios.get(`https://locally.uieee.com/categories/${this.current}/shops`).then(this.getContentInfoSuecc)
        }
    },
    mounted () {
        this.getContentTitle()
        this.getContentInfoData()
    }
}
</script>

<style lang="stylus">

</style>