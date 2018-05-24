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
    imageUrl: [],
    questionsL: [],
    questionsR: [],
    tabs: ["最新", "最热"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    title:'',
    result:'',
    imageUrl1:[
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/baby06.jpeg' }
    ],
    questions1: [
      {
        id: 1, title: 'Jack', title_2: '使用洗衣粉和洗衣皂可能造成洗涤成分或碱性残留，刺激宝宝皮肤，出现肌肤瘙痒和过敏等问题！', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'
      },
      { id: 2, title: 'Lily', title_2: '清洗宝宝衣物多使用手洗，碱性洗衣剂会让皮肤表面过分脱脂，令皮肤干涩或造成过敏，长期使用会形成“主妇手”', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' },
      { id: 3, title: 'Nice', title_2: '可以用洗衣液', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' }
    ],
    questions11: [
      {
        id: 1, title: 'Alice', title_2: '不可以用肥皂', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'
      },
      { id: 2, title: 'Tom', title_2: '不可以用洗衣粉', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' },
      { id: 3, title: 'Sunny', title_2: '可以用洗衣液', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' }
    ],
    imageUrl2: [
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/disco/13.jpeg' }
    ],
    questions21: [
      {
        id: 1, title: 'Jack', title_2: '新买的羊毛衫在正式穿用前最好净洗一次', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'
      },
      { id: 2, title: 'Lily', title_2: '有条件者可将脱水的羊毛衫在80℃的环境中烘干', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' },
      { id: 3, title: 'Nice', title_2: '干洗！', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' }
    ],
    questions22: [
      {
        id: 1, title: 'Alice', title_2: '我洗得比较少！', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png'
      },
      { id: 2, title: 'Tom', title_2: '污迹一落到上面，就应立刻清洁', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' },
      { id: 3, title: 'Sunny', title_2: '穿过一次的应该完全晾干后再收起来', time: '2018-08-08', goodsUrl: 'http://p95v2ft9v.bkt.clouddn.com/login@2x.png' }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id == 1){
      this.setData({
        imageUrl: this.data.imageUrl1,
        questionsL: this.data.questions1,
        questionsR: this.data.questions11,
        title:'宝宝衣服能用洗衣液/洗衣粉/肥皂吗？',
        result:'阅读 1089 参与 656'
      })
    }
    if (options.id ==2){
      this.setData({
        imageUrl: this.data.imageUrl2,
        questionsL: this.data.questions21,
        questionsR: this.data.questions22,
        title: '羊毛衫怎么洗？',
        result: '阅读 1089 参与 656'
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