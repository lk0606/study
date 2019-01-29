<template>
  <div>
    <!-- header -->
    <header class="hd">
      <div class="hd-top">
        <div class="hd-left">
          <img src="/static/img/img-index/position.png" />
          <span>后卫寨</span>
          <img src="/static/img/img-index/right.png" />
        </div>
        <div class="hd-right">
          <img src="/static/img/img-index/weather.jpg" />
          <img src="/static/img/img-index/msg.jpg" />
        </div>
      </div>
      <!--<div class="seach-wrap" style="height: .55rpx)">-->
      <div class="seach" >
        <input type="text" placeholder="沙拉"/>
      </div>
      <!--</div>-->

    </header>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  header{
    box-sizing: border-box;
    padding-top: calc(32 * .14rpx);
    //padding-bottom: calc(32 * .1rpx);
    width: 100%;
    background: #ffcb50;
    .hd-top{
      padding:0 calc(32 * .1rpx);
      //margin-bottom: calc(32 * .13rpx);
      margin-bottom: calc(32 * .03rpx);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .hd-left{
        display: flex;
        align-items: center;
        img:nth-of-type(1){
          margin-right: calc(32 * .06rpx);
          width: calc(32 * .12rpx);height: calc(32 * .16rpx);
        }
        span{
          margin-right: calc(32 * .08rpx);
          font-size: calc(32 * .16rpx);
          color: black;
        }
        img:nth-of-type(2){
          margin-right: calc(32 * .06rpx);
          width: calc(32 * .035rpx);height: calc(32 * .07rpx);
        }
      }
      .hd-right{
        display: flex;
        align-items: center;
        img:nth-of-type(1){
          width: calc(32 * .74rpx);
          height: calc(32 * .21rpx);
        }
        img:nth-of-type(2){
          width: calc(32 * .21rpx);
          height: calc(32 * .21rpx);
        }
      }
    }
    .seach-fixed{
      background: white;
      z-index: 9;
      position: fixed;
      top: 0;
      //padding: calc(32 * .1rpx) 0;
    }
    .seach{
      width: 100%;
      padding: calc(32 * .1rpx) calc(32 * .1rpx);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      input{
        text-indent: calc(32 * .32rpx);
        display: block;
        height: calc(32 * .35rpx);
        width: 100%;
        //margin-top: .13rpx);
        outline:none;
        border: 0;
        border-radius: calc(32 * .02rpx);
        background: url(../../../static/img/img-index/magnifier.png) no-repeat #fffbef left center;
        background-size: calc(32 * .14rpx) calc(32 * .14rpx);
        background-position: calc(32 * .13rpx) calc(32 * .095rpx);
      }
      input::-webkit-input-placeholder{
        font-size: calc(32 * .14rpx);
        color: #999;
        font-family:"黑体";
      }
    }
  }
</style>
