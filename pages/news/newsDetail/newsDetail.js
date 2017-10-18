
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    title:'',
    nodes: '<div class="wkBody"><p>近日，西班牙北部和葡萄牙北部和中部发生森林火灾。据悉，该火灾已经造成超过30人死亡。西班牙加利西亚（Galicia）的下海湾（Rias Baixas）产区也未能幸免于难。目前，当地仍有四十多处起火点，因此许多居民被迫离开家园，前往比戈（Vigo）避难。</p><p style="text-align: center;"><img alt="西班牙下海湾产区遭遇森林大火" src="http://img2.utuku.china.com/600x0/mili/20171018/e77a9e34-42f9-4279-9ab9-8f0cd982fa23.jpg" style="width: 100%;" title="西班牙下海湾产区遭遇森林大火"/></p><p style="text- align: center; "><span style="font- size:12px; ">图片来源：Harpers</span></p><p>下海湾产区葡萄酒委员会正在评估此次火灾所造成的损失，当前受灾最严重的是阿斯内维斯区（As Neves）及其附近的自治区。当地瓦尔加斯侯爵酒庄（Bodegas Marques de Vargas）和卢比奥酒庄（Senorio de Rubios）等著名酒庄的葡萄藤被此次大火毁灭，但酒庄建筑并未受影响，卢比奥酒庄的部分酿酒机器受损。<br/><br/>下海湾产区葡萄酒委员会的技术总监阿古斯丁·拉戈（Agustin Lago）表示：“现在我们还没统计火灾所造成的损失。这次大火发生在采收的末期，幸好不是在采收阶段。”<span style="font-size:12px;" >（文 / Shirley）</span></p></div>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({ url: options.url, title: options.title})
    wx.setNavigationBarTitle({
      title: options.title,
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
    
  }
})