// import Vue from 'vue'
import echarts from 'echarts'
import * as d3 from 'd3'

const api = {
// 获取实时时间
  getTime: () => {
    var strictIsoParse = d3.timeFormat('%m/%d/%Y-%H:%M:%S')
    return strictIsoParse(new Date())
  },
  // 绘制折线图
  drawBar: (container, data) => {
    // 基于dom，初始化echarts实例
    const barGraph = echarts.init(document.getElementById(container))
    // 绘制图表
    barGraph.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3dbff', // 更改坐标轴文字颜色
            fontSize: 14 // 更改坐标轴文字大小
          }
        },
        name: 'x',
        splitLine: { show: false },
        data: ['10:13:13', '10:13:14', '10:13:15', '10:13:16', '10:13:17', '10:13:18', '10:13:19', '10:13:20', '10:13:21', '10:13:22', '10:13:23', '10:13:24']
      },
      grid: {
        left: '1%',
        right: '2%',
        bottom: '5%',
        top: '6%',
        containLabel: true
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3dbff', // 更改坐标轴文字颜色
            fontSize: 14 // 更改坐标轴文字大小
          }
        },
        name: 'y',
        splitLine: { show: true },
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      },
      series: [
        {
          name: '2020/08/06',
          type: 'line',
          data: data
        }]
    })
  },
  // 绘制饼图
  drawPi: (container, data) => {
    const PiGraph = echarts.init(document.getElementById(container));
    PiGraph.setOption({
      angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    })
  }
}

export default api
