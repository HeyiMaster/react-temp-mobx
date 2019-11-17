import React, {Component} from 'react'

// 主要部分表头logo 及 九宫格功能
export default class BasicLayout extends Component{
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}