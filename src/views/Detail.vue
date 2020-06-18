<template>
  <div>
      <detail-header></detail-header>
      <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailHeader from '@/components/Detail/DetailHeader.vue'
import DetailBanner from '@/components/Detail/DetailBanner.vue'


export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  }

}
</script>

<style lang="stylus">

</style>