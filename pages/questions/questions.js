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
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' }
    ],
    questions: [
      { id: 1, title: '6个月的宝宝的衣服可以用洗衣液洗吗？', title_2: '建议仔细看看首页洗衣助手的 宝宝衣物哈，我都是在那学习的，宝宝的东西不能马虎', nums: '181个回答', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg', icon: '../images/icon_off/答.png' },
      { id: 2, title: '家里的孩子贪玩，一次把半瓶洗衣液给倒进洗衣机了，怎么办？', title_2: '把孩子丢进去洗洗', nums: '209个回答', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux01.png', icon:'../images/icon_off/答.png' },
      { id: 3, title: '可以洗内衣吗？', title_2: '可以啊，我一直在洗', nums: '181个回答', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux03.jpeg', icon: '../images/icon_off/答.png'},
      { id: 4, title: '洗得干净吗', title_2: '味道挺小的，衣服洗得还算干净', nums: '181个回答', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux01.png', icon: '../images/icon_off/答.png' },
      { id: 5, title: '自然清香和薰衣草差别大吗？', title_2: '有差别哦，个人喜好', nums: '209个回答', userUrl: 'http://p95v2ft9v.bkt.clouddn.com/toux02.jpeg', icon: '../images/icon_off/答.png'}
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
  toAnswer: function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/answers/answers?id='+id,
    })
  }
})