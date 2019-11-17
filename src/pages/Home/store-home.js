import {observable, action, runInAction} from 'mobx'
import {message} from 'antd'
import io from './io'

export default class Home {
  // 计数
  @observable count = 0;
  // 内容
  @observable content = {};
  // 广告详情
  @observable topicDetail = {};

  @action increaseCount() {
    this.count ++
  }

  @action async getContent(params) {
    try {
      const response = await io.getContent(params)
      runInAction(() => {
        this.content = response
      })
    } catch (e) {
      message.error(e.message)
    }
  }

  @action async getTopicDetail(params) {
    try {
      const response = await io.getTopicDetail(params)
      runInAction(() => {
        this.topicDetail = response
      })
    } catch (e) {
      message.error(e.message)
    }
  }
}
// // 这样声明是因为可以autorun
// const HomeStore = new Home()
// export default HomeStore