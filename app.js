//app.js
/*
pages 文件夹
utils 文件夹
app.js —— 小程序入口
app.json —— 全局配置 pages数组 每一个页面 对应的路径;window
app.wxss —— 全局样式
.js 页面入口 脚本代码 （必须）在这个文件中监听并处理小程序的生命周期函数、声明全局变量
.wxml UI布局 页面结构文件  （必须）
、、完成页面渲染工作
.json 配置文件 （非必须）
.wxss 样式表文件 （非必须）
*/



var appConfig = {
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
   
    console.log('app onLaunch')
    // 展示本地存储能力，获取当前时间存储到日志 logs.js 的 logs
    /*var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    */
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.appData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  // 全局数据 https://jh.qiuxiaokun.com/
  appData: {
    userInfo:null,
    newsUrl:'http://admin.militaryapp.china.com/News/NewsServlet.do',
    mainUrl:'https://jh.qiuxiaokun.com/api/news/getnews/'
  }
}



App(appConfig)