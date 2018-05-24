// pages/discover_detail_baby/discover_detail_baby.js
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
        id:1,
        label:'污渍',
        item_hasbgr:'item_hasbgr',
        text:[
          "宝宝衣物上的污渍和大人不同，可使用宝宝专用洗衣液，专为0-3岁宝宝设计，有效去除宝宝多种日常污渍（如奶渍、水果渍、蔬菜泥渍、油渍、口水渍、大便渍等）和清除异味，令衣物洁净清爽。",
          "（1）肉眼不易观察的污渍洗涤方法 母乳渍、口水渍等肉眼不易观察的污渍，使用“奶渍浸泡法”：按照参考用量，将洗衣液加入水中搅匀，放入衣服浸泡30分钟，正常洗涤。",
          "（2）肉眼可见污渍的洗涤方法 ",
"洗涤宝宝衣物上肉眼可见污渍，采用“干衣预涂法”：干衣时，将原液直接涂抹在污渍处，静置5分钟，正常洗涤。",
          "※蔬菜泥渍、大便渍等固体污渍，建议先用纸巾等擦去表面污渍，再使用“干衣预涂法”。"
        ]
      },
      {
        id: 2,
        item_hasbgr: '',
        label: '奶渍',
        text: [
          "宝宝衣服沾有奶渍，应立即清洗干净，污渍时间越长则越难去除。若奶渍未洗净，不仅会导致宝宝衣物发黄，而且易滋生细菌，伤害宝宝皮肤，甚至会危害呼吸系统健康。",
          "（1）母乳颜色较浅，肉眼不易观察，针对母乳使用宝宝专用洗衣液浸泡洗涤：按照参考用量，将洗衣液加入水中搅匀，放入衣服浸泡30分钟，正常洗涤。",
          "（2）奶粉渍肉眼容易观察的污渍，使用宝宝专用洗衣液结合“干衣预涂法”去除：干衣时，将宝宝专用洗衣液原液直接涂抹在污渍处，静置5分钟，正常洗涤。"
          ]
      },
      {
        id: 3,
        label: '油渍',
        item_hasbgr: '',
        text: [
          "宝宝的衣服上的油渍怎么洗，这是很多新妈妈最担心的问题，既怕洗不掉油渍，又怕清洗后洗衣液化学配方会残留在衣服上，损伤宝宝娇嫩的肌肤。其实，去除宝宝衣服上油渍要注意使用正确的洗衣液，另外还有小窍门可以供妈妈们使用。",

"1、汽油去污渍：动植物油渍是在服装上常见的污渍，也是一种极性液体污渍。这类污渍要用溶剂汽油、四氯乙烯等有机溶液擦拭或刷洗去除。在刷洗时要用毛巾或棉布将擦拭下来的污渍溶液及时汲附，使其脱离衣物表面。防止在溶液挥发后将部分污渍仍留在衣物表面上，会使衣物表面 出现痕迹。如果出现痕迹，可采用重复擦拭或扩大范围刷洗的方法去除。也可把衣物的污渍处涂上水，用高压喷枪喷除。",

          "2、牙膏去污渍：衣服上被动植物油污染后，挤点牙膏于渍处，轻轻擦几次，再用清水搓洗，油污即可清除。",

          "3、生面粉去污渍：翻毛裘衣，若沾上油渍，可在油渍处适当撒些生面粉，再用棕刷顺着毛擦刷，直至油渍去掉。然后，用藤条之类拍打毛面，去掉余粉，使毛绒蓬松清洁。",

          "4、面粉糊去油渍：滑雪衫若沾上油渍，用冷水把少许面粉冲调成浆糊状，涂于油渍处，几小时后，用刷子蘸水刷去粉末，油渍就会消失。",

          "5、面包消除衣服油迹：用餐时，衣服如果被油迹所染，可用新鲜白面包轻轻摩擦，油迹即可消除。",

          "6、选择正确洗衣产品：在选择清除宝宝衣物油渍的洗护产品时，建议妈妈使用专门针对宝宝衣物洗涤的清洁产品。在选购洗衣产品时，要注意查看成分，要选择纯植物的清洁剂，这样的产品在去除宝宝衣服上油渍、奶渍的同时，也不会伤害和刺激宝宝的皮肤"
        ]
      },
      {
        id: 4,
        label: '发霉',
        text: [
          "南方进入回南天，墙壁地板到处是湿哒哒的，这个时候，衣物也特别容易发生霉变。回南天“神兽”湿漉漉来袭，宝宝的衣服也容易发霉有异味，那么宝宝衣物要如何防潮呢？",

"1、分类把衣服装密封在袋子里：在回南天气和梅雨时节，应注意衣物的存放，特别是宝宝的衣服，不要堆放在储物架上，应分类包装，密封在袋子里，然后挂起来。",

          "2、屋内除湿，使用除湿剂：如果很不幸，暖湿空气进屋里了，可以采取一些办法来除湿，减少宝宝衣物发霉的机会。除湿剂是小面积除湿的好工具，主要成分是活性炭、氯化钙、防霉剂、芳香剂等，一般超市里都有除湿剂(除湿盒)出售。在衣柜、书柜、橱柜等容易发霉的地方摆上一两盒除湿剂，能达到较好的除湿效果。需要注意的是，由于多数除湿剂是一次性的，潮湿天气要记得勤换。",

          "3、晾干衣服，干衣机是非常好的选择：回南天晾衣服绝对是一件很烦人的事，空气湿度大，在屋外自然晾干基本不可能。所以聪明的妈妈在甩干衣服后，干脆用冬天的加热器来烘干衣服，也有开空调热风来吹干宝宝衣服的，这些方法都可以使用"
        ]
      },
      {
        id: 5,
        label: '掉色',
        text: [
          "宝宝皮肤比较娇嫩，但当宝宝穿的衣服掉色了怎么办呢？衣服很好看，扔掉既舍不得又浪费，有什么更好的方法吗？下面让小编告诉你宝宝衣服掉色咋办。",

"1、牛仔裤洗时易褪色，洗前先将其放在冷的浓盐水中浸泡约2小时，再用肥皂洗涤就不易褪色了，这个办法是许多家长都知道的哦。",

          "2、在洗易褪色的衣服时候，可先将衣物放入盐水中泡上约30分钟，然后用清水洗净，再按一般洗涤方法洗涤。这样就可以防止衣服褪色，尤其是黑色或红色的衣服，效果更为显著哦。",

          "3、宝宝的衣服褪色怎么办呢？毛衣在洗涤时更容易褪色，如果用凉茶水先将毛衣浸泡10分钟，再按一般洗涤方法洗涤，经过这种方法洗涤后，毛衣不但能洗得干净，而且不会褪色，还能延长穿用年限。",

          "4、人造纤维衣服在洗涤时，可在水中加一些食盐；洗高级的衣料可以在水里加少量的明矾，这些都可以避免或减少衣服褪色。",

          "5、处理宝宝的掉色衣物，建议使用专门的婴幼儿洗衣液，不要使用成人洗衣液。针对婴幼儿衣物洗涤的洗衣液，有专门防止褪色的功能，妈妈们在选购时可以注意挑选。",

          "6、染色衣料因洗涤不当而褪色会影响其美观，这些染料大多易在水中溶化，在潮湿状态下和阳光的作用下也很容易褪色，这是因为染料和纤维纹路结合得不够牢固，所以在洗涤时会出现褪色，建议大家在购买衣物的时候可以问问商家，衣服褪色怎么办，这是最直接的办法。"
        ]
      },
      {
        id: 6,
        label: '除甲醛',
        text: [
          "宝宝衣服除甲醛最有效方法",

"1、宝宝衣服买回来先不要急着穿在身上，尤其是打开包装袋之后就能闻到难闻的气味的衣服。在使用之前最好先在清水中添加少量的白醋或者2 - 3小勺的实用盐进行清洗，可有效去除衣服上的甲醛。",

          "2、如果你选择用温水来浸泡宝宝衣服的话，那么水温最好不要太高，温度控制在30 - 60摄氏度为宜，并在温水中浸泡半小时左右的时间，后将水换掉再重复进行一次。如果在浸泡过程中发现水的颜色变黄了，那么还需要大家再多浸泡一次，水清为止。",

          "3、妈妈在洗衣服时，注意选择具有清除甲醛作用的宝宝专用洗衣液，最好不要用一般的成人洗衣产品。",

          "4、宝宝衣服洗好之后，需要晾晒通风，注意不要将衣服暴晒太久，保持良好的通风条件即可。晾干以后，为避免衣柜中海油残存的甲醛污染到洗净的衣服，那么可以用干净的塑料袋将其进行密封储存，同时也可以放置一些活性炭来吸附残存的甲醛，这样能够有效避免受到甲醛的二次污染，可以放心穿戴。"
        ]
      },
      {
        id: 7,
        label: '缩水',
        text: [
          "宝宝衣服缩水怎么办?",

"1、如果是用洗衣机洗过的话，那用温水泡一下, 再用熨斗烫一下, 以后放到洗衣机里的时候, 洗衣粉多放一点。",

          "2、如果是手洗的话，洗净后以两手同时轻轻拉长缩小的部分，然后冲水晾干。在半干之时，先用手拉开，整出原形；再用熨斗烫一烫，就可恢复原来的尺寸。",

          "3、为防止毛衣缩水，洗毛衣的原则是一次尽快洗好。一般而言，洗衣精用的愈省，愈容易使毛衣缩水，所以不如洗衣精多加一点，以避免毛衣变小。 衣洗毕脱水后，可放置干网或帘子上平展整形。待稍微干燥，便挂吊在衣架上找一个通风背阴处晾干。另外，细毛线晾晒前，可先在衣架上卷上一层毛巾或浴巾，防止变形。",

          "4、毛衣洗后甩干，一般都缩水变小，而带水晒毛衣，又会拉长变大，洗后不缩水的方法是，将甩干的毛衣放在毛巾被上，拉平抻好，放着别动，一两天后再挂起晒干，毛衣不会缩水了，洗后不伸长的方法是将甩干的毛衣放在网兜里，放前最好整整形，然后叠好后放进去，让其自然干，毛衣就不会伸长变细了。"
        ]
      },
      {
        id: 8,
        label: '起球',
        text: [
          "防止宝宝衣服起球妙招",

"衣物起球是特别麻烦的事情之一，特别是对于宝宝穿的衣物，一旦起球，对宝宝的皮肤是会造成一定的影响的，那么有什么妙招可以防止宝宝的衣服起球呢。",

          "1、毛衣防起球法：",

          "①洗涤时把毛衣里朝外，减少毛衣表面的摩擦度，可防止毛衣起球。",

          "②用洗发精洗毛衣，可使毛衣柔顺自然。",

          "2、毛衣修剪器：",

          "大型旋转式内刀头，锋利度高，具有吸附毛屑的功能，在使用过程中不会令毛屑飞散。毛球收集盒方便倾倒，赠送清理毛刷一把。它能有效去除衣物表面毛球，使衣物绒毛不受损伤，让衣物长久如新，再也不会因此而影响衣物的美观，去除的毛球有专门的容器收纳，即干净又美观，是整洁衣物的好帮手。"
        ]
      }
    ],
    result: {
      text: [
        "宝宝衣物上的污渍和大人不同，可使用宝宝专用洗衣液，专为0-3岁宝宝设计，有效去除宝宝多种日常污渍（如奶渍、水果渍、蔬菜泥渍、油渍、口水渍、大便渍等）和清除异味，令衣物洁净清爽。",
        "（1）肉眼不易观察的污渍洗涤方法 母乳渍、口水渍等肉眼不易观察的污渍，使用“奶渍浸泡法”：按照参考用量，将洗衣液加入水中搅匀，放入衣服浸泡30分钟，正常洗涤。",
        "（2）肉眼可见污渍的洗涤方法 ",
        "洗涤宝宝衣物上肉眼可见污渍，采用“干衣预涂法”：干衣时，将原液直接涂抹在污渍处，静置5分钟，正常洗涤。",
        "※蔬菜泥渍、大便渍等固体污渍，建议先用纸巾等擦去表面污渍，再使用“干衣预涂法”。"
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

    console.log(this.data.result)
    console.log(this.data)
  }
})