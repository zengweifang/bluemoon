// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval:5000,
    duration:1000,
    indicatorDots:true,
    autoplay:true,
    imageUrl:[
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-11@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-11@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-11@2x.png' }
    ],
    questions:[
      { id: 1, value: '更超市的一样吗？', nums: 9, userUrl:'../images/icon_off/people.png'},
      { id: 2, value: '更超市的一样吗？', nums: 10, userUrl: '../images/icon_off/people.png' },
      { id: 3, value: '更超市的一样吗？', nums: 9, userUrl: '../images/icon_off/people.png' },
      { id: 4, value: '更超市的一样吗？', nums: 10, userUrl: '../images/icon_off/people.png' }
    ],
    comms:[
      { id: 1, userName: '用户01', time: "2018-08-08", comment: '非常满意！', userUrl: '../images/icon_off/people.png' },
      { id: 2, userName: '用户02', time: "2018-08-08", comment: 'nice!', userUrl: '../images/icon_off/people.png'}
    ],
    shopCarInfo:{},
    shopNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // wx.getStorage({
    //   key: 'shopCarInfo',
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
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

  addShopCar:function(){
    var shopCarInfo = this.data.shopCarInfo
    if (!shopCarInfo.shopCarList){
      shopCarInfo.shopCarList = [];
    }

    if (!shopCarInfo.shopNum){
      shopCarInfo.shopNum = 0;
    }
    
    shopCarInfo.shopNum++;
    console.log(shopCarInfo)
    this.setData({
      shopCarInfo: shopCarInfo,
      shopNum: shopCarInfo.shopNum
    })
    wx.setStorage({
      key: 'shopCarInfo',
      data: this.shopCarInfo,
    })
    wx.showToast({
      title: '加入购物车成功！',
      icon: 'success',
      image: '',
      duration: 2000
    })
  },

  goShopCar:function(){
    wx.navigateTo({
      url: '/pages/shop-car/shop-car',
    })
  },
  tobuy: function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },

  toQuestions:function(){
    wx.navigateTo({
      url: '/pages/questions/questions',
    })
  }

})