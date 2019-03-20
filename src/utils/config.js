module.exports = {
  name: '海尔平台',
  prefix: 'haier',
  footerText: 'test  © 2017 haier',
  logo: 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png',
  baseURL: 'http://localhost:8000/api/v1',
  CORS: ['http://localhost:7001', 'http://192.168.1.110:8000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    user: '/user/:id',
  },
}
