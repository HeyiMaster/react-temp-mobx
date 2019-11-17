import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, action} from "mobx"
import {
  Button,
} from "antd"
import {FormattedMessage} from 'react-intl'
import './Home.less'
import HomeStore from './store-home'

const store = new HomeStore()
@observer
class App extends Component {
  @observable visible = false
  timer = null

  buttonColors = [
    'blue',
    'red',
    'pink',
  ]

  componentDidMount() {
    store.getContent({
      page: 10,
      limit: 5,
    })
    store.getTopicDetail({
      ':id': '5bd4772a14e994202cd5bdb7',
    })
    // io.getContent.abort()
  }
  @observable count2 = 100

  @action clickCount = () => {
    this.count2 ++
    console.log('click')
    
  }

  @action handleClose = () => this.visible = false

  @action handleOpen = () => this.visible = true

  render() {
    console.log('home render')
    return (
      <div className="App">
        <header className="App-header">
          <FormattedMessage
            id="app.home.hello"
          />
          <div>count2: {this.count2}</div>
          <Button type="primary" onClick={this.clickCount}>add</Button>
          <Button type="danger" onClick={() => store.increaseCount()}>store  add</Button>
        </header>
      </div>
    )
  }
}

export default App
