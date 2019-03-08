<template>
    <div>
      name:<input type="text" v-model="logOn.user"/><br/>
      pass:<input type="password" v-model="logOn.pass"/><br/>
      <hr/>
      <input type="button" value="登录" @click="logIn(logOn)">
    </div>
</template>

<script lang="ts">
import { logIn } from '@/api/instance'
// function log (str:{}) {
//   console.log(str)
// }
export default {
  name: 'log',
  data () {
    return {
      logOn: {
        user: 'lk',
        pass: '123456'
      }
    }
  },
  created () {
  },
  methods: {
    logIn (logOn) {
      // log(logOn)
      logIn(logOn).then(
        res => {
          console.log(res)
          if (res.data === true) {
            this.log('_______________登陆成功，即将跳转至首页_________________')
            this.$router.push({
              name: 'index',
              params: {
                pass: res.data
              }
            })
          }
        }
      )
    }
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
