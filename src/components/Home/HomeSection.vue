<template>
       <div class="section-img">
            <img class="section-img-link" src="/images/link-01.png">
            <img class="section-img-link" src="/images/link-02.png">
       </div>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>


<style lang="stylus" scoped>
.section-img
  margin-top: 0.2rem
  height: 2.2rem
  display: flex
  justify-content: space-around
  border-bottom: 0.1rem solid #f0f0f0
.section-img-link
  width: 3.5rem
  height: 1.9rem
</style>