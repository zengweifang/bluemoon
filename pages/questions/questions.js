// pages/questions/questions.js
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
      { id: 1, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '209个回答', userUrl: '../images/icon_off/people.png', icon:'../images/icon_off/答.png' },
      { id: 2, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png'},
      { id: 3, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png' },
      { id: 4, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '209个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png'},
      { id: 5, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png'},
      { id: 6, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png' },
      { id: 7, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '209个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png'},
      { id: 8, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png' },
      { id: 9, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '181个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png' },
      { id: 10, title: '蓝月亮洗手液用多了会伤手吗？', title_2: '不会', nums: '209个回答', userUrl: '../images/icon_off/people.png', icon: '../images/icon_off/答.png'}
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
  toAsk: function(){
    wx.navigateTo({
      url: '/pages/my_question/my_question',
    })
  },
  toAnswer: function(){
    wx.navigateTo({
      url: '/pages/answers/answers',
    })
  }
})