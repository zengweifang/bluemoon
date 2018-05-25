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
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-21@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-21@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E7%BB%84-21@2x.png' }
    ],
    questions:[
      { id: 1, value: '6个月的宝宝的衣服可以用洗衣液洗吗？', nums: 3, userUrl:'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'},
      { id: 2, value: '家里的孩子贪玩，一次把半瓶洗衣液给倒进洗衣机了，怎么办？', nums: 4, userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg' }
    ],
    comms:[
      { id: 1, userName: 'vincent', time: "2018-08-08", comment: '蓝月亮洗衣液好用，洗的干净易清洗味道好闻', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' },
      { id: 2, userName: 'yolanda', time: "2018-08-08", comment: '性价比很高，买了好几次了，一公斤，的，蓝月亮洗衣服，香喷喷的世勋薰衣草味的，很喜欢，满意家人一直都用这个品牌，性价比很高很满意的一次购物', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg'}
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
  },
  toAnswer: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/answers/answers?id=' + id,
    })
  }

})