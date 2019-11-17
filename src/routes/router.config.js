export default [
  {
    path: '/',
    component: 'layouts/BasicLayout',
    routes: [
      {path: '/', redirect: '/home/home'},
      {path: '/home/home', component: 'pages/Home/Home'},
      {path: '/test/home', component: 'pages/ChangeSkin/ChangeSkin'},
    ],
  },
  {
    path: '/404',
    component: 'utils/404',
  },
]