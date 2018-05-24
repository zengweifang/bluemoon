// pages/heat_theory/heat_theory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 5000,
    duration: 1000,
    indicatorDots: false,
    autoplay: true,
    imageUrl: [
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' }
    ],
    theorys:[
      { id: 1, title: '羊毛衫怎么洗？', nums: 656 },
      { id: 2, title: '羊毛衫怎么洗？', nums: 656 },
      { id: 3, title: '羊毛衫怎么洗？', nums: 656 },
      { id: 4, title: '羊毛衫怎么洗？', nums: 656 },
      { id: 5, title: '羊毛衫怎么洗？', nums: 656 },
      { id: 6, title: '羊毛衫怎么洗？', nums: 656 }
    ]
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  toTopic: function(event){
    console.log(event.currentTarget.dataset)
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/topic/topic?id='+id,
    })
  }
})