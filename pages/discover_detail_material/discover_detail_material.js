// pages/discover_detail_material/discover_detail_meterial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 5000,
    duration: 1000,
    indicatorDots: false,
    autoplay: false,
    imageUrl: [
      { id: 1, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 2, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' },
      { id: 3, url: 'http://p95v2ft9v.bkt.clouddn.com/mall/%E6%96%B0%E5%93%81%E9%A6%96%E5%8F%91@2x.png' }
    ],
    list: [
      {
        id: 1,
        label: '棉织物',
        item_hasbgr: 'item_hasbgr',
        text: [
          "先浸泡几分钟（不宜过久，内衣不可用热水），用洗涤剂时，最佳水温为40 - 50°。可以用少量清水多冲洗几次，每次冲洗完后应拧干，再进行冲洗，冲洗后在阴凉处晾干，避免在太阳底下曝晒。"
        ]
      },
      {
        id: 2,
        label: '麻纤维',
        text: [
          "麻纤维刚硬，抱合力差，洗涤时要比棉织物轻些，切忌使用硬刷和用力揉搓，以免布面起毛。洗后不可用力拧绞，有色织物不要用热水烫泡，不宜在阳光下曝晒，以免褪色"
        ]
      },
      {
        id: 3,
        label: '丝绸',
        text: [
          "先浸泡10分钟（不宜过长），可选用中性肥皂或皂片、中性洗涤剂，忌用碱水洗。浴液以微温或室温为好。洗涤后，轻轻压挤水份，切忌拧绞，然后在阴凉通风处晾干，不宜曝晒和更不宜烘干。"
        ]
      },
      {
        id: 4,
        label: '羊毛',
        text: [
          "通常用室温25°的水加中性洗涤剂或皂片洗涤。洗涤时切忌用搓板搓洗，机洗应轻洗，时间不宜过长。洗涤后用手挤压除去水分，然后沥干。洗衣机脱水以半分钟为宜，然后在阴凉通风处晾晒，忌曝晒。"
        ]
      },
      {
        id: 5,
        label: '黏胶纤维',
        text: [
         "水洗时要随洗随浸，不可长时间浸泡。洗涤时要轻洗，并用中性洗涤剂或低碱洗涤剂，水温度不能超过45°。洗后，把衣服叠起来，大把地挤掉水份，切忌拧绞，然后在阴凉通风处晾晒，忌曝晒。"
        ]
      },
      {
        id: 6,
        label: '涤纶',
        text: [
          "用冷水浸泡15分钟，然后用一般合成洗涤剂洗涤，洗液温度不宜超过45oC。领口、袖口较脏处可用毛刷刷洗。洗后，漂洗净，可轻拧绞，置阴凉通风处晾干，不可曝晒，不宜烘干，以免因热生皱。"
        ]
      }, {
        id: 7,
        label: '晴纶',
        text: [
          "基本与涤纶织物洗涤相似。先在温水中浸泡15分钟，然后用低碱洗涤剂洗涤，要轻揉、轻搓。厚织物用软毛刷洗刷，最后脱水或轻轻拧去水份。纯睛纶织物可晾晒，但混纺织物应放在阴凉处晾干。"
        ]
      },
      {
        id: 8,
        label: '锦纶',
        text: [
          "先在冷水中浸泡15分钟，然后用一般洗涤剂洗涤（含碱大小不论）。洗液温度不宜超过45oC。洗后在阴凉通风处阴干，也忌曝晒。"
        ]
      },
      {
        id: 9,
        label: '维纶',
        text: [
          "先用室温水浸泡一下，然后在室温下进行洗涤。洗涤剂为一般洗衣粉即可。切忌用热开水，以免使维纶纤维膨胀和变硬，甚至变形。洗后晾干，避免日晒。"
        ],
      },
      {
        id: 10,
        label: '牛仔',
        text: [
          "第一次下水可把牛仔裤翻转过来，加一些白醋浸湿大约半小时，切忌用热水浸泡牛仔衣物。尽量避免机洗，清洗时深色与浅色分开，勿使用漂白剂和加酶带蓝颗料粒洗衣粉，洗完后在阴凉通风处晾干，避免曝晒。"
        ]
      }
    ],
    result: {
      text: [
        "先浸泡几分钟（不宜过久，内衣不可用热水），用洗涤剂时，最佳水温为40 - 50°。可以用少量清水多冲洗几次，每次冲洗完后应拧干，再进行冲洗，冲洗后在阴凉处晾干，避免在太阳底下曝晒。"
      ]
    }
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

  showResult: function (event) {
    for (var i = 0; i < this.data.list.length; i++) {
      if (this.data.list[i].id == event.currentTarget.dataset.id) {
        this.data.list[i].item_hasbgr = 'item_hasbgr';
        this.setData({
          result: {
            text: this.data.list[i].text
          }
        })
      } else {
        this.data.list[i].item_hasbgr = '';
      }
    }
    this.setData({
      list: this.data.list
    })
  }
})