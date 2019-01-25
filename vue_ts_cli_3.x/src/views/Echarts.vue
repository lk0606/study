<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script lang="ts">
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/world.js'
// import world from '@/assets/js/world.js'
require('echarts/theme/macarons')
var myData = [
  { name: '海门', value: [121.15, 31.89, 30] },
  { name: '鄂尔多斯', value: [109.781327, 39.608266, 120] },
  { name: '招远', value: [120.38, 37.35, 142] },
  { name: '舟山', value: ['122.207216', '29.985295'] }
]
export default {
  name: 'Echarts',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
    // chartData: {
    //   type: Object
  },
  data () {
    return {
      chart: null,
      myData: myData,
      cityInfo: []
    }
  },
  created () {
    // this.getCityInfo()
  },
  mounted () {
    this.initMap()
  },
  methods: {
    getCityInfo () {
      fetch('http://192.168.20.28:8081/assets/json/city.json').then(res => res.json()).then(res => {
        console.log(res, 'res')
      })
    },
    setOptions (myData = {}) {
      this.chart.setOption(
        {
          geo: {
            map: 'world',
            itemStyle: {
              normal: {
                areaColor: 'yellow',
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                show: false // 划过显示地名
              }
            }
          },
          backgroundColor: '#000',
          series: [
            {
              name: '销量',
              type: 'scatter',
              coordinateSystem: 'geo',
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: myData // series数据内容
            }
          ]
        }
      )
    },
    initMap () {
      // if (this.cityInfo && typeof this.cityInfo === 'object' && this.cityInfo !== null) {
      this.chart = echarts.init(this.$el, 'macarons')
      console.log(this.chart)
      var myData = [
        { name: '海门', value: [121.15, 31.89, 30] },
        { name: '鄂尔多斯', value: [109.781327, 39.608266, 120] },
        { name: '招远', value: [120.38, 37.35, 142] },
        { name: '舟山', value: ['122.207216', '29.985295'] }
      ]
      this.setOptions(myData)
      // }
    }
  }
}
</script>

<style scoped>

</style>
