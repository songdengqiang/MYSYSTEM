<template>
    <main class="contentInfo">
      <div class="leftBar">
        <div class="deviceInfo1">
          <table>
            <tr class="contentInfoss">
              <th class="titles">基础信息</th>
            </tr>
            <tr class="contentInfoss">
              <td>纺丝产线</td>
              <td>纺丝位号</td>
              <td>纺丝速度(m/min)</td>
              <td>剩余时间(sec)</td>
              <td>当前卷径(mm)</td>
              <td>络筒时间</td>
              <td>丝线品种</td>
            </tr>
            <tr class="contentInfoss">
              <td>L1</td>
              <td>21</td>
              <td>3160</td>
              <td>8678</td>
              <td>319</td>
              <td>16:02:54</td>
              <td>经纶 0.05</td>
            </tr>
          </table>
        </div>
        <div class="deviceInfo">
          <div class="deviceInfo1">
            <table>
              <tr class="contentInfoss">
                <th class="titles">传感器状态</th>
              </tr>
              <tr class="contentInfoss">
                <td>压辊保护</td>
                <td><div></div></td>
                <td>A卡头识别</td>
                <td><div></div></td>
                <td>微动探头</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>B卡头识别</td>
                <td><div></div></td>
                <td>生头杆原位</td>
                <td><div></div></td>
                <td>A卡头到位</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>生头杆到位</td>
                <td><div></div></td>
                <td>B卡头到位</td>
                <td><div></div></td>
                <td>移丝板到位</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>切换位置判断</td>
                <td><div></div></td>
                <td>铲板原位</td>
                <td><div></div></td>
                <td>护板原位</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>伺服报警</td>
                <td><div></div></td>
                <td>导盘变频报警</td>
                <td><div></div></td>
                <td>推筒原位</td>
                <td><div></div></td>
              </tr>
            </table>
          </div>
          <div class="deviceInfo1">
            <table>
              <tr class="contentInfoss">
                <th class="titles">PLC输出状态</th>
              </tr>
              <tr class="contentInfoss">
                <td>压辊下降缓</td>
                <td><div></div></td>
                <td>尾丝器动作</td>
                <td><div></div></td>
                <td>转盘微动</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>压辊升降</td>
                <td><div></div></td>
                <td>移丝板动作</td>
                <td><div></div></td>
                <td>转盘慢速</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>推筒出</td>
                <td><div></div></td>
                <td>卡头刹车</td>
                <td><div></div></td>
                <td>导盘升速</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>推筒回</td>
                <td><div></div></td>
                <td>松筒</td>
                <td><div></div></td>
                <td>网络控制</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>护板动作</td>
                <td><div></div></td>
                <td>伺服脉冲复位</td>
                <td><div></div></td>
                <td>吸丝切丝</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>尾丝器到位</td>
                <td><div></div></td>
                <td>伺服使能</td>
                <td><div></div></td>
                <td>满卷预报</td>
                <td><div></div></td>
              </tr>
              <tr class="contentInfoss">
                <td>铲板动作</td>
                <td><div></div></td>
                <td>伺服制动</td>
                <td><div></div></td>
                <td>推筒到位</td>
                <td><div></div></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="centerBar">
        <div class="headerInfo">
          <div class="titleIcon">
            <img src="../../assets/img/设备监控.svg" alt="图标">
            <div @click="Switch()">设备的选择</div>
          </div>
          <div class="titles">Map OverView</div>
          <div>设备介绍</div>
        </div>
        <div class="deviceImg">
          <img src="../../assets/img/device.jpg" alt="设备">
        </div>
        <div class="footerInfo">
          <div class="topBar topBar3">
            <div class="btns choose choose1" @click="changDate(1)">卡头</div>
            <div class="btns choose choose2" @click="changDate(2)">摩擦辊</div>
            <div class="btns choose choose3" @click="changDate(3)">横动</div>
            <div class="btns choose choose4" @click="changDate(4)">电机</div>
          </div>
          <div class="deviceInfo1">
            <table>
              <tr class="contentInfoss">
                <th class="titles1">{{titleName1}}</th>
                <th class="titles1">{{titleName2}}</th>
              </tr>
              <tr class="contentInfoss" v-for="x in datass" :key="x.id">
                <td>{{x.name1}}</td>
                <td>{{x.name1Value}}</td>
                <td>{{x.name2}}</td>
                <td>{{x.name2Value}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="rightBar">
        <div class="curveInfo">
          <div>{{titleName1}}变化曲线</div>
          <div id="curve1"></div>
          <div id="curve2"></div>
          <div class="monitorInfo">
            <div>状态</div>
            <div>运行</div>
            <div>检修</div>
            <div>故障</div>
            <div>待机</div>
            <div>离线</div>
          </div>
          <div class="monitorInfo">
            <div>等级</div>
            <div>正常</div>
            <div>轻微偏移</div>
            <div>超出界限</div>
            <div>严重故障</div>
            <div></div>
          </div>
        </div>
        <div class="curveInfo">
          <div>{{titleName2}}变化曲线</div>
          <div id="curve3"></div>
          <div id="curve4"></div>
          <div class="monitorInfo">
            <div>状态</div>
            <div>运行</div>
            <div>检修</div>
            <div>故障</div>
            <div>待机</div>
            <div>离线</div>
          </div>
          <div class="monitorInfo">
            <div>等级</div>
            <div>正常</div>
            <div>轻微偏移</div>
            <div>超出界限</div>
            <div>严重故障</div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
</template>>

<script>
import api from '@/assets/Js/home/home'
import * as d3 from 'd3'
export default {
  name: 'monitor',
  data () {
    return {
      titleName1: '卡头1',
      titleName2: '卡头2',
      datass: [
        { name1: '卡头1频率(Hz)', name1Value: 53.01, name2: '卡头2频率(Hz)', name2Value: 0 },
        { name1: '卡头1转速(rpm)', name1Value: 3148, name2: '卡头1转速(rpm)', name2Value: 0 },
        { name1: '异常对象', name1Value: '滚动显示', name2: '异常对象', name2Value: '滚动显示' },
        { name1: '异常位置', name1Value: '滚动显示', name2: '异常位置', name2Value: '滚动显示' }
      ],
      datas: [
        [8, 8.8, 8.6, 2.7, 8.1, 4.7, 7.4, 2.3, 6.9, 2.5, 3.6, 5.6],
        [8.1, 7.8, 6.6, 4.7, 3.1, 4.7, 7.4, 1.3, 6.9, 8.5, 3.6, 5.6],
        [6, 8.8, 8.6, 2.7, 8.1, 4.7, 7.4, 2.3, 6.9, 2.5, 3.6, 5.6],
        [3.1, 7.8, 6.6, 4.7, 3.1, 4.7, 7.4, 1.3, 6.9, 8.5, 3.6, 5.6]
      ],
      datas1: [
        { name1: '卡头1频率(Hz)', name1Value: 53.01, name2: '卡头2频率(Hz)', name2Value: 0 },
        { name1: '卡头1转速(rpm)', name1Value: 3148, name2: '卡头1转速(rpm)', name2Value: 0 },
        { name1: '异常对象', name1Value: '滚动显示', name2: '异常对象', name2Value: '滚动显示' },
        { name1: '异常位置', name1Value: '滚动显示', name2: '异常位置', name2Value: '滚动显示' }
      ],
      datas2: [
        { name1: '频率(Hz)', name1Value: 53.01, name2: '卡头2频率(Hz)', name2Value: 53.01 },
        { name1: '转速(rpm)', name1Value: 3148, name2: '卡头1转速(rpm)', name2Value: 3148 },
        { name1: '异常对象', name1Value: '滚动显示', name2: '异常对象', name2Value: '滚动显示' },
        { name1: '异常位置', name1Value: '滚动显示', name2: '异常位置', name2Value: '滚动显示' }
      ],
      datas3: [
        { name1: '--', name1Value: '--', name2: '--', name2Value: '--' },
        { name1: '--', name1Value: '--', name2: '--', name2Value: '--' },
        { name1: '异常对象', name1Value: '滚动显示', name2: '异常对象', name2Value: '滚动显示' },
        { name1: '异常位置', name1Value: '滚动显示', name2: '异常位置', name2Value: '滚动显示' }
      ],
      datas4: [
        { name1: '电流(A)', name1Value: 10, name2: '电流(A)', name2Value: 0 },
        { name1: '电压(V)', name1Value: 220, name2: '电压(V)', name2Value: 0 },
        { name1: '温度(℃)', name1Value: 40, name2: '温度(℃)', name2Value: 20 },
        { name1: '异常对象', name1Value: '滚动显示', name2: '异常对象', name2Value: '滚动显示' },
        { name1: '异常位置', name1Value: '滚动显示', name2: '异常位置', name2Value: '滚动显示' }
      ]
    }
  },
  methods: {
    // 点击事件
    changDate (num) {
      const str = '.choose' + num
      d3.selectAll('.choose').style('box-shadow', 'none')
      d3.select(str).style('box-shadow', '#59cdf7 0 0 5px')
      switch (num) {
        case 1:
          this.titleName1 = '卡头1'
          this.titleName2 = '卡头2'
          this.datass = this.datas1
          api.drawBar('curve1', this.datas[0])
          api.drawBar('curve2', this.datas[1])
          api.drawBar('curve3', this.datas[2])
          api.drawBar('curve4', this.datas[3])
          break
        case 2:
          this.titleName1 = '摩擦辊里侧'
          this.titleName2 = '摩擦辊外侧'
          this.datass = this.datas2
          api.drawBar('curve1', this.datas[1])
          api.drawBar('curve2', this.datas[0])
          api.drawBar('curve3', this.datas[3])
          api.drawBar('curve4', this.datas[2])
          break
        case 3:
          this.titleName1 = '同步带'
          this.titleName2 = '气缸'
          this.datass = this.datas3
          api.drawBar('curve1', this.datas[1])
          api.drawBar('curve2', this.datas[3])
          api.drawBar('curve3', this.datas[0])
          api.drawBar('curve4', this.datas[2])
          break
        case 4:
          this.titleName1 = '卡头1电机'
          this.titleName2 = '卡头2电机'
          this.datass = this.datas4
          api.drawBar('curve1', this.datas[3])
          api.drawBar('curve2', this.datas[1])
          api.drawBar('curve3', this.datas[2])
          api.drawBar('curve4', this.datas[0])
          break
      }
    },
    Switch () {
      this.$router.push('deviceC')
    }
  },
  mounted () {
    api.drawBar('curve1', this.datas[0])
    api.drawBar('curve2', this.datas[1])
    api.drawBar('curve3', this.datas[2])
    api.drawBar('curve4', this.datas[3])
  }
}
</script>

<style scoped >
/* 主体内容的设置 */
@import url("../../assets/Css/common/tables.css");
@import url("../../assets/Css/home/main.css");
</style>
