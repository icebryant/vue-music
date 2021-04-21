<template>
  <div>
    recommend
  </div>
</template>

<script>
import { getRecommend } from '../service/recommend'
export default {
  name: 'Recommend',
  mounted() {
    getRecommend().then(res => {
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
