import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, observer} from 'mobx-react'
import Router from './routes/routerResolver'
import Intl from './locales/Intl'
import LocaleStore from "./models/store-locale"
import getToken from "./utils/getToken"
import * as serviceWorker from './serviceWorker'
import {Spin} from "antd"
// 最后加载样式
import './assets/style/index.less'

const stores = {
  locale : LocaleStore,
}
getToken()
@observer
class Index extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Intl>
          <Router />
        </Intl> 
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
