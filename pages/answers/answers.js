// pages/answers/answers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comms: [
      { id: 1, userName: '用户01', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: '非常满意！', url: '../images/icon_off/praise.png' },
      { id: 2, userName: '用户02', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: 'nice!', url: '../images/icon_off/praise.png' },
      { id: 3, userName: '用户03', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: '非常满意！', url: '../images/icon_off/praise.png' },
      { id: 4, userName: '用户04', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: 'nice!', url: '../images/icon_off/praise.png' },
      { id: 5, userName: '用户05', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: '非常满意！', url: '../images/icon_off/praise.png' },
      { id: 6, userName: '用户06', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: 'nice!', url: '../images/icon_off/praise.png' },
      { id: 7, userName: '用户07', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: '非常满意！', url: '../images/icon_off/praise.png' },
      { id: 8, userName: '用户08', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: 'nice!', url: '../images/icon_off/praise.png' },
      { id: 9, userName: '用户09', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: '非常满意！', url: '../images/icon_off/praise.png' },
      { id: 10, userName: '用户10', userUrl: '../images/icon_off/people.png', time: "2018-08-08", comment: 'nice!', url: '../images/icon_off/praise.png' }
    ],
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

  submit: function () {
    wx.navigateTo({
      url: '/pages/questions/questions',
    })
  }
})