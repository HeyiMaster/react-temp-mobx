import React, {Component} from 'react'
import {observable, action} from "mobx"
import {
  Button,
  Switch,
  Spin,
  Modal,
  Progress,
} from "antd"
import {FormattedMessage} from 'react-intl'
import {getThemeColor, changeAntdTheme} from 'dynamic-antd-theme'
import './ChangeSkin.less'

export default class ChangeSkin extends Component {
  @observable visible = false

  buttonColors = [
    'blue',
    'red',
    'pink',
  ]

  @action handleClose = () => this.visible = false

  @action handleOpen = () => this.visible = true

  render() {
    return (
      <div className="ChangeSkin">
        <header className="ChangeSkin-header">
          <div>
            <p>更换主题：</p>
            {
              this.buttonColors.map(color => (
                <Button
                  key={color}
                  style={{backgroundColor: color}}
                  onClick={() => {
                    changeAntdTheme(
                      getThemeColor(color)
                    )
                  }}
                ></Button>
              ))
            }
          </div>
          <FormattedMessage
            id="app.changeskin.hello"
          />
          <Spin />
          <Progress percent={30}/>
          <Switch
            onChange={this.handleOpen}
          />
          <Modal
            visible={this.visible}
            onOk={this.handleClose}
            onCancel={this.handleClose}
          />
        </header>
      </div>
    )
  }
}
