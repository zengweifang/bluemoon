// pages/science/science.js
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
      { id: 2, url: '../images/bluemoon27.jpeg' },
      { id: 3, url: '../images/bluemoon27.jpeg' }
    ],
    questions: [
      { id: 1, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '209个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums:'88888', thumbupUrl:'../images/icon_off/praise.png',thumbupNums:'9999'},
      { id: 2, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '181个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums: '88888', thumbupUrl: '../images/icon_off/praise.png', thumbupNums: '9999' },
      { id: 3, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '181个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums: '88888', thumbupUrl: '../images/icon_off/praise.png', thumbupNums: '9999'},
      { id: 4, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '209个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums: '88888', thumbupUrl: '../images/icon_off/praise.png', thumbupNums: '9999' },
      { id: 5, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '181个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums: '88888', thumbupUrl: '../images/icon_off/praise.png', thumbupNums: '9999' },
      { id: 6, title: '荧光增白剂科学知识', title_2: '你不知道的小科学', nums: '181个回答', goodsUrl: '../images/bluemoon05.jpg', userUrl: '../images/icon_off/people.png', userNums: '88888', thumbupUrl: '../images/icon_off/praise.png', thumbupNums: '9999' }
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
      url: '/pages/science_detail/science_detail',
    })
  }
})