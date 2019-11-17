import React, {Component} from 'react'
import moment from "moment"
import * as _ from "lodash"

export function asyncComponent(getComponent) {
  return class AsyncComponent extends Component {
    static Component = null
    state = {Component: AsyncComponent.Component}
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({Component})
        })
      }
    }
    render() {
      const {Component} = this.state
      if (Component) {
        const Comp = Component.default
        return <Comp {...this.props} />
      }
      return null
    }
  }
}
// 格式化时间
export function formatting(input, full) {
  if (input) {
    const times = parseInt(input) * 1000
    if (full) {
      return moment(times).format('YYYY-MM-DD HH:mm')
    }
    if (moment().isSame(moment(times), 'day')) {
      return moment(times).format('HH:mm')
    }
    return moment(times).format('MM-DD')
  }
}
// 查找某个dom 是否为 另外dom 的子节点
export function isChildernNode(node, parentnode) {
  parentnode = document.querySelector(parentnode)
  while (node !== undefined && node != null && parentnode !== undefined
    && parentnode !== null && node.tagName.toUpperCase() !== 'BODY') { 
    if (node === parentnode){ 
      return true
    } 
    node = node.parentNode
  } 
  return false
} 

// format treedata
export function formatTreeData(tree, column) {
  if(!tree.length)return []
  tree.map((v, i) => {
    let tempChildren = v.children?v.children:[]
    if(!_.isEmpty(tempChildren)) { 
      formatTreeData(v.children, column)
    }
    if(!_.isEmpty(v[column])){
      let con = []
      v[column].map((uv, ui)=>{
        uv['key'] = String(uv.uid)
        uv['value'] = String(uv.uid)
        uv['title'] = uv.name
        con[ui] = uv
        // con[ui]['id'] = 'u_'+uv.id
        return con
      })
      v[column] = []
      v['children'] = v.children?con.concat(v.children):con
    }
    //部门
    v['key'] = "p_"+String(v.id)
    v['value'] = "p_"+String(v.id)
    v['title'] = v.name
    return v
  })
  return tree 
} 

export function isArray(str) {
  return Object.prototype.toString.call(str) === "[object Array]"
}