import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {asyncComponent} from '../utils/utils'
import routerConfig from './router.config'

export default class RootRouter extends Component {
  render() {
    return this.getRootRouter()
  }
  // 获取layout级别路由并包装其以下路由
  getRootRoutes = rootRoutes => {
    return rootRoutes.map(route => {
      const {
        path,
        component,
        routes,
        ...restParam
      } = route
      // 获取当前root级别的layout组件路径
      const SolvedComp = asyncComponent(() => import(`../${component}`))
      return (
        <Route
          path={path}
          key={`${path}-${component}`}
          component={() => <SolvedComp>{routes && this.getRoutes(routes)}</SolvedComp>}
          {...restParam}
        />
      )
    })
  }
  // 获取layout级别以下路由
  getRoutes = routes => {
    return (
      <Switch>
        {
          routes.map(route => {
            const {
              path,
              component,
              redirect,
              ...restParam
            } = route
            // 用于重定向的配置
            if (redirect) {
              return <Redirect exact key={path} from={path} to={redirect} />
            }
            // 获取当前root级别的layout组件路径
            const SolvedComp = asyncComponent(() => import(`../${component}`))
            if (!path) {
              return <Route key={component} component={SolvedComp}/>
            }
            return (
              <Route
                key={path}
                path={path}
                component={SolvedComp}
                {...restParam}
              />
            )
          })
        }
      </Switch>
    )
  }
  // 获取总路由
  getRootRouter() {
    const routes = this.getRootRoutes(routerConfig)
    return (
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    )
  }
}
