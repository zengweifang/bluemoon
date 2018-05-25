// pages/answers/answers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    name:'',
    url:'',
    comms: [],
    comms1: [
      { id: 1, userName: 'yolanda', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg', time: "2018-08-08", comment: '建议仔细看看首页洗衣助手的 宝宝衣物哈，我都是在那学习的，宝宝的东西不能马虎', url: '../images/icon_off/praise.png' },
      { id: 2, userName: 'yolanda', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg', time: "2018-08-08", comment: '宝宝衣服说的很清楚啦!', url: '../images/icon_off/praise.png' },
      { id: 3, userName: 'yolanda', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg', time: "2018-08-08", comment: '要用 宝宝专用洗衣液', url: '../images/icon_off/praise.png' }
    ],
    comms2: [
      { id: 1, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '把孩子丢进去洗洗', url: '../images/icon_off/praise.png' },
      { id: 2, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '少弄些水，然后打开机子，让水液从低管流出来，还可以用哦!', url: '../images/icon_off/praise.png' },
      { id: 3, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '把你家的所有衣服都洗了把', url: '../images/icon_off/praise.png' },
      { id: 4, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: ' 小孩子就调皮，要管管', url: '../images/icon_off/praise.png' }
    ],
    comms3: [
      { id: 1, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '可以啊，我一直在洗', url: '../images/icon_off/praise.png' },
      { id: 2, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '可以得，放心哈', url: '../images/icon_off/praise.png' },
      { id: 3, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '我不知道哦，我是洗内裤的。。。', url: '../images/icon_off/praise.png' }
    ],
    comms4: [
      { id: 1, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '味道挺小的，衣服洗得还算干净', url: '../images/icon_off/praise.png' },
      { id: 2, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '挺干净的，味道闻起来也舒服', url: '../images/icon_off/praise.png' },
      { id: 3, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '还阔以', url: '../images/icon_off/praise.png' },
      { id: 4, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '干净', url: '../images/icon_off/praise.png' }
    ],
    comms5: [
      { id: 1, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '有差别哦，个人喜好', url: '../images/icon_off/praise.png' },
      { id: 2, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '自然味道淡一点哈!', url: '../images/icon_off/praise.png' },
      { id: 3, userName: 'vincent', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png', time: "2018-08-08", comment: '有一点不一样啊', url: '../images/icon_off/praise.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.id == 1){
      this.setData({
        comms:this.data.comms1,
        title:'6个月的宝宝的衣服可以用洗衣液洗吗？',
        name:'vicent',
        url:'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'
      })
    }
    if (options.id == 2) {
      this.setData({
        comms: this.data.comms2,
        title: '家里的孩子贪玩，一次把半瓶洗衣液给倒进洗衣机了，怎么办？',
        name: 'yolanda',
        url: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg'
      })
    }
    if (options.id == 3) {
      this.setData({
        comms: this.data.comms3,
        title: '可以洗内衣吗？',
        name: 'yolanda',
        url: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg'
      })
    }
    if (options.id == 4) {
      this.setData({
        comms: this.data.comms4,
        title: '洗得干净吗？',
        name: 'yolanda',
        url: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg'
      })
    }
    if (options.id == 5) {
      this.setData({
        comms: this.data.comms5,
        title: '自然清香和薰衣草差别大吗？',
        name: 'yolanda',
        url: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg'
      })
    }

    console.log(this.data)
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
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      image: '',
      duration: 2000
    })
  }
})