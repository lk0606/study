<template>
  <div>
    这是首页
    <h2>auth: {{this.$store.state.auth}} </h2>
  </div>
</template>

<script lang="ts">
import * as ls from '@/utils/localStorage'
export default {
  name: 'Index',
  methods: {
    getData () {
      let auth = this.$route.params.pass
      if (auth !== undefined) {
        this.log(typeof auth, 'first')
        ls.setItem('auth', auth)
      } else {
        this.log(ls.getItem('auth'), 'refresh')
        this.$store.state.auth = ls.getItem('auth')
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
