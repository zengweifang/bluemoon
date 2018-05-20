// pages/list/list.js
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
      { id: 1, url: '../images/bluemoon27.jpeg' },
      { id: 2, url: '../images/bluemoon26.jpeg' },
      { id: 3, url: '../images/bluemoon25.jpeg' }
    ],
    list:[
      { id: 1, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88'},
      { id: 2, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88'},
      { id: 3, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 4, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 5, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 6, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 7, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 8, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' },
      { id: 9, url: '../images/bluemoon05.jpg', title1: '芦荟抑菌洗手液', title2: '杀菌抑菌 清爽保湿 滋润双手', price: '28.88' }
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
  toDetail: function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})