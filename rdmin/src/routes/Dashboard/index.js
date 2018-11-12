import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd'
import { connect } from 'dva'
import { getPostNumberStatistics, getReplyNumberStatistics } from '@/selectors/Dashboard'

const mapStateToProps = state => {
  return {
    postNumberStatistics: getPostNumberStatistics(state),
    replyNumberStatistics: getReplyNumberStatistics(state)
  }
}

class Dashboard extends React.Component {

  componentDidMount () {
    this.initData()
  }

  initData = () => {
    this.props.dispatch({ type: 'dashboard/postStatisticsRequest' })
    this.props.dispatch({ type: 'dashboard/replyStatisticsRequest' })
  }

  render () {
    let postCount = 0
    let replyCount = 0
    this.props.postNumberStatistics.forEach(p => postCount += p.count)
    this.props.replyNumberStatistics.forEach(r => replyCount += r.count)
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
                    name: '发帖统计',
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
                      {value: postCount, name:'发帖'},
                      {value: replyCount, name:'回复'}
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

export default connect(mapStateToProps)(Dashboard)
