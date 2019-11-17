import React, {Component} from 'react'
import {inject} from 'mobx-react'
import {addLocaleData, IntlProvider} from 'react-intl'
import zh_CN from './zh-CN'
import en_US from './en-US'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import {observer} from 'mobx-react'

addLocaleData([...zh, ...en])

@inject('locale')
@observer
class Intl extends Component {
  render() {
    const {locale, children} = this.props
    console.log(locale.locale)
    const localeMessage = this.getLocale(locale.locale)
    return (
      <IntlProvider
        key={locale.locale}
        locale={locale.locale}
        messages={localeMessage}
      >
        {children}
      </IntlProvider>
    )
  }
  // 获取当前语言环境对应的国际化资源
  getLocale(val) {
    let locale = val || navigator.language
    switch (locale) {
      case 'en-US':
        return en_US
      case 'zh-CN':
        return zh_CN
      default:
        return en_US
    }
  }
}

export default Intl
