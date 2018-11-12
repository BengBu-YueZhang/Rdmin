import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd'

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <div className="m-b-10">
          <Card
            title="访问量统计(最近7天)"
            style={{ width: '100%' }}
          >
            <ReactEcharts
              option={{
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
              }}
            />
          </Card>
        </div>
        <div className="m-b-10">
          <Card
            title="发帖量&回复量统计(最近7天)"
            style={{ width: '100%' }}
          >
            <ReactEcharts
              option={{
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  x: 'left',
                  data:['发帖','回复']
                },
                series: [
                  {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                      normal: {
                        show: false,
                        position: 'center'
                      },
                      emphasis: {
                        show: true,
                        textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                        }
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data:[
                      {value:335, name:'发帖'},
                      {value:310, name:'回复'}
                    ]
                  }
                ]
              }}
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default Dashboard
