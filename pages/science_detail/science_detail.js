// pages/science_detail/science_detail.js
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
    data:{
      title:'什么是荧光增白剂？',
      text:'荧光增白剂是一种色彩调理剂，具有亮白增艳的作用，广泛用于造纸、纺织、洗涤剂等多个领域中。荧光增白剂约有15种基本结构类型，近400种结构。我国允许在衣物洗涤剂中添加的荧光增白剂有两种类型：二苯乙烯基联苯类（如CBS等)和双三嗪氨基二苯乙烯类（如33#等)。'
    },

    result: {
      text: []
    },
    text1:[
      "荧光增白剂是一种色彩调理剂，具有亮白增艳的作用，广泛用于造纸、纺织、洗涤剂等多个领域中。荧光增白剂约有15种基本结构类型，近400种结构。我国允许在衣物洗涤剂中添加的荧光增白剂有两种类型：二苯乙烯基联苯类（如CBS等)和双三嗪氨基二苯乙烯类（如33#等)。"
    ],
    text2:[
      "日常穿着的白色和彩色衣物，多数在纺织染整的后整理阶段添加荧光增白剂，可以提高织物的明亮度并抵消未经处理织物的黄灰色调，从而让白棉布、白色涤棉布增白、增亮，让有需要补充蓝光的彩色棉布或涤棉布获得特定要求的色彩。因此，实际上多数衣料本身就含有荧光增白剂。",

        "然而，衣物中的荧光增白剂在穿着和洗涤的过程中会流失，从而导致白色衣物发黄，彩色衣物不再鲜艳。在洗衣液中加入适量的衣物洗涤剂用荧光增白剂，可对这种流失进行补充，发挥色彩调理作用，让白色衣物恢复原来的亮白，彩色衣物更加鲜艳，令衣物亮丽如新。",

      "因此，添加了衣物洗涤剂用荧光增白剂的蓝月亮亮白增艳洗衣液，不仅可以把衣物洗干净，还可以对衣物进行颜色调理，是更高档的洗衣液。"
    ],
    image:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.id == 1){
      this.setData({
        result:{
          text:this.data.text1
        },
        image: 'http://p95v2ft9v.bkt.clouddn.com/know01.jpeg',
      })
    }

    if(options.id ==2){
      this.setData({
        result: {
          text: this.data.text2
        },
        image: 'http://p95v2ft9v.bkt.clouddn.com/know10.jpeg'
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

  }
})