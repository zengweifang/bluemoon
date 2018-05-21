// pages/topic/topic.js
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
      { id: 1, title: '曾大大', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' },
      { id: 2, title: '曾大大', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' },
      { id: 3, title: '曾大大', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' }
    ],
    questions2: [
      { id: 1, title: '小小邓', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' },
      { id: 2, title: '小小邓', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' },
      { id: 3, title: '小小邓', title_2: '我从来不洗！！！', time: '2018-08-08', goodsUrl: '../images/icon_off/people.png' }
    ],
    tabs: ["最新", "最热"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
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
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  submit: function(){
    wx.showToast({
      title: '发表成功',
      icon: 'success',
      image: '',
      duration: 2000
    })
  }
})