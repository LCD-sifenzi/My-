

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    passWord:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 登录
   */
  btnClickLogin : function () {
    console.log("登录")
    app.appData.userInfo = {userName:this.data.userName,passWord:this.data.passWord}
    console.log(app.appData.userInfo.userName)
    wx.navigateBack({})
  },
  /**
   * 注册
   */
  btnClickRegister : function () {
    console.log("注册")
    wx.navigateTo({
     url: '../register/register',
    })
  },
  /**
   * 忘记密码
   */
  btnClickResetPwd : function () {
   wx.navigateTo({
    url: '../reset/reset',
   })
  },
  /**
   * 用户输入
   */
  inputName : function (event) {
    this.setData({userName:event.detail.value})
  },
  /**
   * 密码输入
   */
  inputPwd : function (event) {
    this.setData({passWord: event.detail.value })
    
  },
  /**
   * 微信登录
   */
  btnClickWeiXin : function () {
    console.log("微信登录")
  }

  
})