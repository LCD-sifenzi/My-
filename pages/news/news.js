
var app = getApp();
var pageIndex = 1;
var isRefresh = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:[],
    imgUrls: [
      {
        url: 'http://photocdn.sohu.com/20160824/Img465700296.jpg',
        id: 1,
        width: '750rpx',
        mode: 'widthFix',
        text: '水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面水果刀削面'
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.startPullDownRefresh({})
    
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    pageIndex = 1
    this.getNews()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!isRefresh) {
      this.getNews()
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 获取新闻列表  api/news/getnews/
   */
  getNews: function () {
    let that = this
    isRefresh = true
    wx.request({
      url: app.appData.newsUrl, 
      data: {
        'page': pageIndex,
        'pageSize':20,
        'type':1,
        'processID':'getNewsList'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        console.log(res.data.data.length)
        wx.stopPullDownRefresh()
        isRefresh = false
        if (pageIndex == 1) {
          that.setData({ news: res.data.data })
        }else{
          console.log(res.data)
          that.setData({ news: [...that.data.news, ...res.data.data] })
        }
        if (res.data.data.length > 0) {
          pageIndex += 1
        }
      },
      fail: function (res) {
        wx.stopPullDownRefresh()
        isRefresh = false
        console.log('请求错误=>' +res.data)
      }
    })
  },
  /**
   * 跳转到详情页 
   */
  clickToDetail: function (e) {
    
    let obj = e.currentTarget.dataset.da
    let url = '../news/newsDetail/newsDetail?url=' + obj.NewsUrl + '&title=' + obj.Title
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  }
})