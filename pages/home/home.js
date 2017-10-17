
const util = require('../../utils/util.js')


var pageObject = {

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        url: 'http://photocdn.sohu.com/20160824/Img465700296.jpg',
        id:1,
        width: '750rpx',
        mode: 'widthFix',
        text:'水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面'
      },
      {
        url: '',
        id: 1,
        width: '750rpx',
        mode: 'widthFix',
        text: '水果刀削面'
      },
      {
        url: 'http://photocdn.sohu.com/20160825/Img465875448.jpg',
        id: 1,
        width: '750rpx',
        mode: 'widthFix',
        text: '水果刀削面'
      },
      {
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id: 1,
        width: '750rpx',
        mode: 'widthFix',
        text: '水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面'
      }
    ],
    categorys:[
      {
        url: '../../images/tab_news1.png',
        id: 1,
        text:'天猫'
      },
      {
        url: '../../images/tab_news1.png',
        id: 2,
        text: '聚划算'
      },
      {
        url: '../../images/tab_news1.png',
        id: 3,
        text: '天猫国际'
      },
      {
        url: '../../images/tab_news1.png',
        id: 4,
        text: '外卖'
      },
      {
        url: '../../images/tab_news1.png',
        id: 5,
        text: '天猫超市'
      },
      {
        url: '../../images/tab_news1.png',
        id: 6,
        text: '充值中心'
      },
      {
        url: '../../images/tab_news1.png',
        id: 7,
        text: '飞猪旅行'
      },
      {
        url: '../../images/tab_news1.png',
        id: 8,
        text: '领金币'
      },
      {
        url: '../../images/tab_news1.png',
        id: 9,
        text: '拍卖'
      },
      {
        url: '../../images/tab_news1.png',
        id: 10,
        text: '分类'
      }

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    mode:'widthFix',
    width: '375px'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log()
    this.setData({
      
    })
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
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
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

  clickType: function (event) {
    console.log(event.currentTarget.dataset.item.text)
    wx.showToast({
      title: '点击-' + event.currentTarget.dataset.item.text,
      image: event.currentTarget.dataset.item.url
    })
  }
}

Page(pageObject)