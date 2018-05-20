// pages/discover/discover.js
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
    questions: [
      { id: 1, value: '深层洁净洗衣机洗衣效果如何？', nums: '209个回答', userUrl: '../images/bluemoon05.jpg' },
      { id: 2, value: '洗手液洗多了对手有伤害吗？', nums: '181个回答', userUrl: '../images/bluemoon05.jpg' }
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

  toscience: function(){
    wx.navigateTo({
      url: '/pages/science/science',
    })
  },
  toQuestions:function(){
    wx.navigateTo({
      url: '/pages/questions/questions',
    })
  },
  toHeatTheory: function(){
    wx.navigateTo({
      url: '/pages/heat_theory/heat_theory',
    })
  },
  toScience: function(){
    wx.navigateTo({
      url: '/pages/science/science',
    })
  },
  toDetail: function(){
    wx.navigateTo({
      url: '/pages/science_detail/science_detail',
    })
  },
  toask: function(){
    wx.navigateTo({
      url: '/pages/questions/questions',
    })
  },
  toaskdetail: function(){
    wx.navigateTo({
      url: '/pages/answers/answers',
    })
  },
  todisc: function(){
    wx.navigateTo({
      url: '/pages/heat_theory/heat_theory',
    })
  }
})