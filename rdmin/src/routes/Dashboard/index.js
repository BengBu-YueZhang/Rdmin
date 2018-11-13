import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd'
import { connect } from 'dva'
import { getPostNumberStatistics, getReplyNumberStatistics, getUserNumberStatistics } from '@/selectors/Dashboard'

const mapStateToProps = state => {
  return {
    postNumberStatistics: getPostNumberStatistics(state),
    replyNumberStatistics: getReplyNumberStatistics(state),
    userNumberStatistics: getUserNumberStatistics(state)
  }
}

class Dashboard extends React.Component {

  componentDidMount () {
    this.initData()
  }

  initData = () => {
    this.props.dispatch({ type: 'dashboard/postStatisticsRequest' })
    this.props.dispatch({ type: 'dashboard/replyStatisticsRequest' })
    this.props.dispatch({ type: 'dashboard/userStatisticsRequest' })
  }

  render () {
    // 发帖数量
    let postCount = 0
    // 回复数量
    let replyCount = 0
    let userX = this.props.userNumberStatistics.map(u => u.createdAt)
    let userValue = this.props.userNumberStatistics.map(u => u.count)
    this.props.postNumberStatistics.forEach(p => postCount += p.count)
    this.props.replyNumberStatistics.forEach(r => replyCount += r.count)
    return (
      <div>
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
        <div className="m-b-10">
          <Card
            title="用户注册数量"
            style={{ width: '100%' }}
          >
            <ReactEcharts
              option={{
                xAxis: {
                  type: 'category',
                  data: userX.toJS()
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                  data: userValue.toJS(),
                  type: 'bar'
                }]
            }}
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard)
