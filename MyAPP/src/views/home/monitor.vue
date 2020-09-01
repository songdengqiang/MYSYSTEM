<template>
    <main class="contentInfo">
      <div class="leftBar">
        <div>
          <div class="inputs">
            <div>运行的模块:</div>
            <input type="text"  v-model="pyName">
            <div class="control2" @click="checkDiv()"></div>
          </div>
          <div class="titleInfo2"><strong>请输入你的相关变量（问题)</strong> </div>
          <textarea name="" id="textarea1" cols="40" rows="5" placeholder="请输入相关参数！" v-model="textParam"></textarea>
          <button class="sumbmit1" @click="sumbmitParam()">提交</button>
        </div>
        <div>
          <div class="kGqa">推荐结果网络</div>
          <textarea name="" id="textarea2" cols="50" rows="7" v-model="textResult"></textarea>
        </div>
      </div>
      <div class="centerBar">
        <div class="headerInfo">
          <div class="titleIcon">
            <img src="../../assets/img/设备监控.svg" alt="图标">
            <div @click="Switch()">网络全局显示</div>
          </div>
          <div class="titles">Map OverView</div>
          <div>人员知识网络</div>
        </div>
        <div class="deviceImg">
          <div>知识网络</div>
        </div>
        <div class="footerInfo">
          <div class="topBar topBar3">
            <div class="btns choose choose1" @click="changDate(1)">人员网络</div>
            <div class="btns choose choose2" @click="changDate(2)">设备网络</div>
            <div class="btns choose choose3" @click="changDate(3)">物料网络</div>
            <div class="btns choose choose4" @click="changDate(4)">工艺网络</div>
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
      </div>
    </main>
</template>>

<script>
import api from '@/assets/Js/home/home'
import axios from 'axios'
import * as d3 from 'd3'
export default {
  name: 'monitor',
  data () {
    return {
      pyName: 'qaSystem/test.py',
      textParam: '',
      textResult: '',
      titleName1: '上一组',
      titleName2: '下一组',
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
          this.titleName1 = '上一组'
          this.titleName2 = '下一组'
          this.datass = this.datas1
          api.drawBar('curve1', this.datas[0])
          api.drawBar('curve2', this.datas[1])
          api.drawBar('curve3', this.datas[2])
          api.drawBar('curve4', this.datas[3])
          break
        case 2:
          this.titleName1 = '上一组'
          this.titleName2 = '下一组'
          this.datass = this.datas2
          api.drawBar('curve1', this.datas[1])
          api.drawBar('curve2', this.datas[0])
          api.drawBar('curve3', this.datas[3])
          api.drawBar('curve4', this.datas[2])
          break
        case 3:
          this.titleName1 = '上一组'
          this.titleName2 = '下一组'
          this.datass = this.datas3
          api.drawBar('curve1', this.datas[1])
          api.drawBar('curve2', this.datas[3])
          api.drawBar('curve3', this.datas[0])
          api.drawBar('curve4', this.datas[2])
          break
        case 4:
          this.titleName1 = '上一组'
          this.titleName2 = '下一组'
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
    },
    sumbmitParam () {
      var paramInfo = {}
      paramInfo.pyName = this.pyName
      paramInfo.textParam = this.textParam
      axios.post(this.GLOBEL.pathID + '/home/pyChild', paramInfo).then(res => {
        this.textResult = res.data
        console.log(res.data)
      })
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
