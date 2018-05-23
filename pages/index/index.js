//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    interval: 8000,
    duration: 1000,
    indicatorDots: false,
    autoplay: true,
    imageUrl: [
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/banner@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/banner@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/banner@2x.png' }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputShowed: false,
    inputVal: "",
    recomm_images:[
      { id: 1, url: '../images/bluemoon08.jpg' },
      { id: 2, url: '../images/bluemoon08.jpg' },
      { id: 3, url: '../images/bluemoon08.jpg' }
    ],
    images : [
      { id: 1, url: '../images/bluemoon05.jpg'},
      { id: 2, url: '../images/bluemoon05.jpg'},
      { id: 3, url: '../images/bluemoon05.jpg' },
      { id: 4, url: '../images/bluemoon05.jpg' },
      { id: 5, url: '../images/bluemoon05.jpg' }
    ],
    goods:[
      { id: 1, url: '../images/bluemoon05.jpg' },
      { id: 2, url: '../images/bluemoon05.jpg' },
      { id: 3, url: '../images/bluemoon05.jpg' },
      { id: 4, url: '../images/bluemoon05.jpg' },
      { id: 5, url: '../images/bluemoon05.jpg' }
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toList: function(){
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
})
