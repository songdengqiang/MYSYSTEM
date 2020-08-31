<template>
    <div class="DeviceMain">
      <div class="tongjiInfo1">
        <section>
          <table>
            <tr>
              <th>电源概况</th>
              <th>参数结果</th>
            </tr>
            <tr class="DeviceTR" v-for="data in powerInfoD" :key="data.id">
              <td>{{data.name}}</td>
              <td>{{data.value}}</td>
            </tr>
          </table>
        </section>
        <section>
          <table>
            <tr class="tongjiInfo3">
              <th>状态统计</th>
            </tr>
            <tr class="tongjiInfo4">
              <td class="tongjiInfo5">
                <section><div class="divIcon">32</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>正常</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon1">6</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>预警</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon2">3</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>故障</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon3">0</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>维护</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
            </tr>
          </table>
        </section>
      </div>
      <div class="tongjiInfo2">
        <div class="deviceIn" v-for="datas in deviceInfo" :key="datas.id" @click="Jump(datas.name)" :style="datas.color">
          <div class="deviceIconImg"><img :src=" datas.imgurl " alt="图片"></div>
          <div>
            <div>{{datas.name}}</div>
            <div>{{datas.states}}</div>
            <div>线速度:{{datas.speed}}</div>
            <div>络筒时间: {{datas.times1}}</div>
            <div><span>剩余时间:</span> {{datas.times2}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'deviceC',
  data () {
    return {
      powerInfoD: [
        { name: '参数1', value: '----' },
        { name: '参数2', value: '----' },
        { name: '参数3', value: '----' },
        { name: '参数4', value: '----' },
        { name: '参数5', value: '----' },
        { name: '参数6', value: '----' },
        { name: '参数7', value: '----' },
        { name: '参数8', value: '----' },
        { name: '参数9', value: '----' },
        { name: '参数10', value: '----' }
      ],
      deviceInfo: [
        { name: 'L8#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L3#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L2#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L5#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L4#1', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L7#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L9#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L1#1', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L8#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L3#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L2#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L5#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L4#1', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L7#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L9#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L1#1', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L8#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L3#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L2#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L5#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L4#1', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L7#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L9#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L1#1', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L8#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L3#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L2#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L5#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L4#1', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L7#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L9#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
        { name: 'L1#1', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') }

      ]
    }
  },
  methods: {
    Jump (name) {
      this.$router.push('monitor')
    }
  },
  mounted () {

  }
}
</script>
<style  scoped >
  @import url("../../assets/Css/common/tables.css");
  @import url("../../assets/Css/common/divIcon.css");
  @import url('../../assets/Css/home/deviceC.css');
</style>
