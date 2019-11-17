import {observable, action} from "mobx"


class LocaleStore {
  @observable locale = "en-US"

  @action
  chooseLocale(val) {
    let new_val
    switch (val) {
      case "zh-US":
        new_val = "en-US"
        break
      case "en-US":
        new_val = "zh-CN"
        break
      
      default:
        new_val = "en-US"
        break
    }
    this.locale = new_val
  }
}
// 这样声明是因为可以autorun
const Locale = new LocaleStore()

export default Locale