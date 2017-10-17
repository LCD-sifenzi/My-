
//获取App 全局信息
var app = getApp();
var location = wx.getStorageSync('location') || false;
var notification = wx.getStorageSync('notification') || false;

//小程序所有功能列表
var appAllRows= [
  {
    title: 'UI布局基础 flex',
  },
  {
    title: 'view',
  },
  {
    title: 'text',
  },
  {
    title: 'rich - text',
  }, 
  {
    title: 'image',
  },
  {
    title: 'button',
  },
  {
    title: 'scroll-view',
  },
  {
    title: 'swiper',
  },
  {
    title: 'movable-view',
  },
  {
    title: 'cover-view',
  },
  {
    title: 'icon',
  },
  {
    title: 'progress',
  },
  {
    title: 'checkbox 多项选择器',
  },
  {
    title: 'form 表单',
  },
  {
    title: 'input 输入框',
  },
  {
    title: 'textarea 多行输入框',
  }, 
  {
    title: 'label 标签',
  },
  {
    title: 'picker 弹起的滚动选择器',
  },
  {
    title: 'picker-view 嵌入页面的',
  },
  {
    title: 'radio 单项选择器',
  },
  {
    title: 'slider 滑动选择器',
  },
  {
    title: 'switch 开关选择器',
  },
  {
    title: 'navigator 导航',
  }, 

];


var pageObject = {

  /**
   * 页面的初始数据
   */
  data: {
    userName:'点击登录',
    list:[
      {
        id:1,
        title:'组1',
        rows:[
          {
            id:11,
            title:'钱包',
            image:'',
            subtitle:'',
            subimage:''
          }
        ]
      },
      {
        id: 2,
        title: '组2',
        rows: [
          {
            id: 21,
            title: '我的关注',
            image: '',
            subtitle: '0',
            subimage: ''
          },
          {
            id: 22,
            title: '我的粉丝',
            image: '',
            subtitle: '999亿',
            subimage: ''
          }
        ]
      },
      {
        id: 3,
        title: '设置',
        rows: [
          {
            id: 31,
            title: '设置',
            image: '',
            subtitle: '',
            subimage: ''
          },
          {
            id: 32,
            title: '通知',
            image: '',
            subtitle: '',
            subimage: '',
            isSwitch: true,
            checked: notification
          },
          {
            id: 33,
            title: '定位',
            image: '',
            subtitle: '',
            subimage: '',
            isSwitch:true,
            checked: location
          }
        ]
      },
      {
        id: 4,
        title: '小程序学习',
        rows: appAllRows
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否有登陆
    if (app.appData.userInfo == null) {
     //wx.navigateTo({ url: '../user/login/login', })
    }else{
      
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   if (app.appData.userInfo != null) {
     this.setData({ userName: app.appData.userInfo.userName })
   }
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  switchClick: function (event) {
    if (event.currentTarget.id == '32') {
      notification = !notification
      wx.setStorageSync('notification', notification)

    }else{
      location = !location
      wx.setStorageSync('location', location)
    }
  },

  userClick: function () {
    if (app.appData.userInfo == null) {
      wx.navigateTo({ url: '../user/login/login', })
    } else {

    }
  },
  rowClick: function (event) {
    if (event.currentTarget.id == '设置') {
      wx.showToast({
        title: '点击-' + event.currentTarget.id,
      })
    }else{
      if (app.appData.userInfo == null) {
        wx.navigateTo({ url: '../user/login/login', })
      } else {
        wx.showToast({
          title: '点击-' + event.currentTarget.id,
        })
      }
    }
    
  }

}

Page(pageObject)