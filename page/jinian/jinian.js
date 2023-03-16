const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '纪念品',
      },
      {
        text: '购买'
      }
    ],
    c1: [
      {
        id: 1,
        img: '/imgs/cart/p3.png',
				distance: 1.8,
				sales: 1475,
				name: '嘟嘟嘟比礼品店',
        desc: '各式各样的卡通玩具，再现缤纷的动画世界！赶快把这些熟悉又可爱的朋友们带回家！ 嘟噜嘟比礼品店，别忘了为你的亲人、好友、或是心仪已久的他她挑选一份精美礼品，让他们一起感受主题公园的欢乐气氛！方特欢乐生活品种最齐全、商品最值收藏的综合购物商店，各种与嘟比和嘟妮有关的商品，这里都有哦！公仔、玩具、图书音像、服装鞋帽、家居饰品等一应俱全！'  
      },
      {
        id: 2,
        img: '/imgs/cart/p4.png',
        distance: 1.8,
        sales: 1475,
        name: '印象工坊',
        desc: '走进这里，给你一次不一样的体验，感受与陶泥接吻的刺激感，体会亲手制作工艺品的纯甄美好。还可以购买精美的陶瓷纪念品。'
      },
      {
        id: 3,
        img: '/imgs/cart/p5.jpg',
        distance: 1.8,
        sales: 1475,
        name: '海螺湾纪念品店',
        desc: '五光十色的珊瑚环绕四周，可爱的鱼儿在你身边吐着泡泡，你熟悉的海螺湾小伙伴们近得让你触手可及。这是一个结合多个播放立体影片的大型银幕、亦真亦幻的人造珊瑚和礁石景观、大型机械动作模型的环境4D剧场,多种表演手段的运用, 周围的环境和时刻变换的场景，让您在欢乐美丽的海底世界观赏海底居民的盛大表演。'
      },
      {
        id: 4,
        img: '/imgs/cart/p6.jpg',
        distance: 1.8,
        sales: 1475,
        name: '童话艺坊',
        desc: '各式各样的卡通玩具，再现缤纷的动画世界！赶快把这些熟悉又可爱的朋友们带回家！'
      },
      {
        id: 5,
        img: '/imgs/cart/p7.jpg',
        distance: 1.8,
        sales: 1475,
        name: '蜡烛工厂',
        desc: '又红又大的苹果、美丽的玫瑰花、青翠的树叶，什么？这些都是蜡烛！小小蜡烛，变幻出大大世界，还有各种精美芬芳的熏香，这些惊喜都来自蜡烛工厂！'
      },
      {
        id: 6,
        img: '/imgs/cart/p8.jpg',
        distance: 1.8,
        sales: 1475,
        name: '光阴时空礼品店',
        desc: '动感逼真的影视道具、玩具，经典场面的版画、海报，凝聚光影世界的精髓，绝对值得珍藏！别忘了为你的亲人、好友、或是心仪已久的他/她挑选一份精美礼品，让他们一起感受主题公园的欢乐气氛！'
      },
    ],
    c2: [
      {
        id: 1,
        img: '/imgs/cart/p9.jpg',
        distance: 1.8,
        sales: 1475,
        name: '阿吉仔 / 吉治百货',
        desc: '阿吉仔的逼格店，叫吉治百货，另外一家门店开在吉治百货对面小巷里。这家吉治百货是和旧物仓合作，所以店铺也是各种爷爷奶奶那辈旧玩物，花砖、木头、拨号电话、水壶等。3层楼，值得文艺青年们好好细逛。反正现在打着纯手工旗号的太多，但这家我是问了一大圈处女座的朋友推荐的，值得一去。阿吉仔的旧店，价格低，包装简易，适合自己吃。',
        desc: ' ▲价格（数量）：25/盒 6个 独立装',

        desc: ' ▲包装颜值：吉治百货-★★★★★ / 阿吉仔-★✩✩✩✩',

        desc: ' ▲甜度：★★★★✩',

        desc: ' ▲口感：皮薄，酥松，易掉饼皮',

        desc: ' ▲综合指数：★★★★★',

        desc: ' ▲店址：大元路、大同路'
      },
      {
      id: 2,
      img: '/imgs/cart/p10.jpg',
      distance: 1.8,
      sales: 1475,
      name: '林菽庄',
      desc: '故事是这样滴：“菽庄”小时候很爱糕点，那时妈妈发现馅饼是菽庄的最爱，特地请常驻鼓浪屿领事馆的一位糕点老师傅教授烘焙地道馅饼的配方和手艺。这个做饼方子经过菽庄妈妈用心改良，受到亲友的赞誉，也成了菽庄大院私房馅饼。',
      desc: '▲价格（数量）：15/盒 6个 独立包装   ▲颜值：★★★★✩   ▲甜度：★★★✩✩    ▲口感：肉馅冰凉不腻不油，有一粒粒豆子  ▲综合指数：★★★★✩ ▲店址：中山路、曾厝垵'
    },
    {
    id: 3,
    img: '/imgs/cart/p11.jpg',
    distance: 1.8,
    sales: 1475,
    name: '王孙家',
    desc: '传统的牛皮纸包装，有试吃了他们家的椰子饼，味道比馅饼的出众。他们店装修和包装风格都很可爱，去他们店里可以美美的拍上几张游客照哟，还有好多其他鱼干、果脯可试吃。▲价格（数量）：15/盒  6个 组合装▲颜值：★★★✩✩▲甜度：★★★★✩▲口感：口感较一般，推荐这家的椰子饼▲综合指数：★★★✩✩▲店址：中山路、曾厝垵'
  },
  {
  id: 4,
  img: '/imgs/cart/p12.jpg',
  distance: 1.8,
  sales: 1475,
  name: '黄远堂',
  desc: '黄远堂说是凤梨酥的鼻祖，品牌历史很悠久，纯正的台湾本土牌子，但小妖问了很多台湾朋友竟然不晓得这家店耶。包装是很台湾南洋风，内馅口感绵密，饼皮内松外硬些。▲价格（数量）：30/盒 6个 独立包装  ▲颜值：★★★✩✩▲甜度：★★★★★ ▲综合指数：★★★★✩ ▲店址：中山路、曾厝垵'
},
{
  id: 5,
  img: '/imgs/cart/p13.jpg',
  distance: 1.8,
  sales: 1475,
  name: '南普陀',
  desc: '最古早的馅饼，跑了好多个地方都没买到，记得几年前每个店里都是南普陀的馅饼。其实小妖个人最爱买这个，可能是因为小时候吃的是这个牌子的所以比较念旧。记忆里，早上配杯红茶，和家人闲聊，一口馅饼，回忆特别美好。买的话推荐原味素饼就好。▲价格（数量）：15/盒 6个 独立包装 ▲颜值：★★✩✩✩ ▲甜度：★★★★✩   ▲口感：油而不腻    ▲综合指数：★★★★✩   ▲店址：南普陀寺出口、伴手礼集合店    '
},
{
  id: 6,
  img: '/imgs/cart/p14.jpg',
  distance: 1.8,
  sales: 1475,
  name: '赵小姐的店',
  desc: '初来厦门就知道这个牌子了，那时候赵小姐是一个特别南洋风、具有小资情调的店，说是旅居海外赵小姐的孙女为纪念祖母出资开设滴。每个店都有一块区域设茶座，游客可在休息之余品尝闽南功夫茶。既然休息了不如喝口茶，喝了茶不如就这买了，厉害的营销方式，真的是醉翁之意不在酒。店里陈设着古典可爱的物件，复古而雅致，里面还有好多搭配的茶包礼盒以及其他产品也是非常吸引眼球的。  ▲价格（数量）：20/盒 6个 组合装   ▲包装颜值：★★★✩✩  ▲甜度：★★★★★   ▲口感：腻，量小   ▲综合指数：★★★★✩  ▲店址：鼓浪屿、中山路、沙坡尾、曾厝垵'
},
{
  id: 7,
  img: '/imgs/cart/p15.jpg',
  distance: 1.8,
  sales: 1475,
  name: '儀蘭',
  desc: '店铺都是开在居民区，他们没有做游客群体，吉治百货对面有一家。还有做一些其他的古早味食品，小妖家附近就有两家，有一家下班时间都是排队呢。他们家不仅做馅饼，还有小时候吃的“乒乓饼”和一些现做蛋卷。淘宝网上也有卖的，搜索出来的是老大同这个牌子，但门店的味道还是更美一些。毕竟新鲜，一般都是出炉就卖光。▲价格（数量）：20/盒  6个 组合装▲包装颜值：★★✩✩✩▲甜度：★★★★✩▲口感：古早味，酥松▲综合指数：★★★★✩▲店址：八市、前埔等'
},
{
  id: 8,
  img: '/imgs/cart/p16.jpg',
  distance: 1.8,
  sales: 1475,
  name: 'babycat私家御',
  desc: '这家的馅饼是身边朋友推荐最多的，记忆中在鼓浪屿馅饼质量排挺前面的。中山路店铺风格和鼓浪屿不同，这家扑面而来的当下流行的性冷淡风，小妖表示很中意呢。和其他烂大街的田园小清新区分开了，babycat打的是手工制作，的确是比一般的馅饼口感精细，也是要对比试吃才有所感受的。买的是原味，但小妖试吃了抹茶及香芋口味。刚出炉的是最棒了，外皮酥软，热馅香气扑鼻  ▲价格（数量）：28/盒 4个 组合装X2包  ▲包装颜值：★★★✩✩ ▲甜度：★★★✩✩  ▲口感：皮薄，酥软，肉馅细腻 ▲综合指数：★★★★  ▲店址：鼓浪屿、中山路'
},
{
  id: 9,
  img: '/imgs/cart/p17.jpg',
  distance: 1.8,
  sales: 1475,
  name: '第七铺',
  desc: '不同来历的大铁门，但店铺也是蛮清新的。店铺效果挺棒，属于创意伴手礼体验店，里面的产品琳琅满目，很夏天的赶脚，包装也是萌萌哒小清新。其实小妖觉得他们家椰子饼最棒，馅饼被秒下去了。▲价格（数量）：25/盒  6个 独立装▲包装颜值：★★★✩✩▲甜度：★★★★★▲口感：皮薄，酥松，易掉饼皮，扎实的口感▲综合指数：★★★✩✩▲店址：中山路、曾厝垵'
},
{
  id: 10,
  img: '/imgs/cart/p18.jpg',
  distance: 1.8,
  sales: 1475,
  name: '鹭仁甲',
  desc: '这家卖得比较多的是鲜花饼和凤梨酥，包装也都挺有质感的。有段时间鹭仁甲很火，这段时间貌似有点被埋没了。他们家色彩运用得比较明亮，明亮的色彩包装小妖都很爱。这次买的是桂花馅饼，实在是没有原味，区别了那些古朴传统的包装，但这样也不是太像馅饼的风格。▲价格（数量）：28/盒  6个独立装▲包装颜值：★★★★✩▲甜度：★★✩✩✩▲口感：饼皮干些▲综合指数：★★★✩✩▲店址：中山路、曾厝垵'
},
{
  id: 11,
  img: '/imgs/cart/p19.jpg',
  distance: 1.8,
  sales: 1475,
  name: '鼓浪屿',
  desc: '鼓浪屿馅饼听说是很早的牌子，但馅饼是后来才推出的产品线，古朴的包装，配料也是挺有讲究，区别于新出的那些品牌，说是45道工序制作，他家slogan“记忆的味道，难忘的情怀”很戳重点吖！▲价格（数量）：36/盒 6个 独立装   ▲包装颜值：★★★★✩ ▲甜度：★★✩✩  ▲口感：酥而不脆，内陷绵甜   ▲综合指数：★★★★✩    ▲店址：中山路、鼓浪屿'
},
{
  id: 12,
  img: '/imgs/cart/p20.jpg',
  distance: 1.8,
  sales: 1475,
  name: '日光岩',
  desc: '日光岩很早就出现在记忆里，小时候小妖就见到蛮多游客到鼓浪屿一定会买。随着发展，太多品牌推出，貌似埋没了。几十年未变的包装，看起来和汪记很类似，鼓浪屿大街小巷很多，价格低廉，适合传统游客。▲价格（数量）：10/盒 6个 组合装   ▲包装颜值：★✩✩✩✩   ▲甜度：★★★★✩   ▲口感：饼皮较硬，较油，肉馅常规绵甜感   ▲综合指数：★✩✩✩✩  ▲店址：鼓浪屿、综合伴手礼店'
},
{
  id: 13,
  img: '/imgs/cart/p21.jpg',
  distance: 1.8,
  sales: 1475,
  name: '苏小糖',
  desc: '苏小糖 卖一些花茶、牛轧糖、凤梨酥等，淡淡糖果色彩的少女风，适合送给女生当伴手礼。'
},
{
  id: 14,
  img: '/imgs/cart/p22.png',
  distance: 1.8,
  sales: 1475,
  name: '一封情酥',
  desc: '这是我们去买松塔的第一站，店家超级热情的把我们招呼进去。一进店，我们便尝了扁桃仁味的松塔，观察松塔后发现，松塔内部有很多层次，看起来酥到不行！！！一口咬下去，觉得甜味并不是很足，但是过一段时间，会发现甜味的后劲特别强，还有点腻腻的味道~比较适合嗜甜的朋友哦 一封情酥的包装还是很好看的，“情不自己，酥给了你”。这份伴手礼挺适合送给喜欢的人哦~▲价格（数量）：28元/盒 8个独立包装  ▲包装颜值：★★★★✩ ▲甜度：★★★★✩  ▲酥脆：★★★✩✩  ▲口感：入口时没有味道，咀嚼后感到又甜又腻 ▲综合指数：★★★✩✩   ▲店址：中山路步行街、国办路、文青路（曾厝垵店）'
},
{
  id: 15,
  img: '/imgs/cart/p23.png',
  distance: 1.8,
  sales: 1475,
  name: '榴芒事迹',
  desc: '榴芒事迹的松塔也是甜腻甜腻类型的，它的包装是偏可爱型的，但是包装袋的质量不太行，我们就提着走了一上午，它就坏了。买回来以后，我们发现一封情酥榛子味的松塔包装和榴芒事迹扁桃仁味的松塔包装居然如此相似！！连口味也是如此相似！ ▲价格（数量）：28元/盒 8个独立包装  ▲包装颜值：★★★✩✩  ▲甜度：★★★★✩  ▲酥脆：★★★✩✩  ▲口感：又甜又腻，味道一般 ▲综合指数：★★★✩✩▲店址：中山路步行街、教堂街、旗杆内街、国办路（曾厝垵店）  '
},
{
  id: 16,
  img: '/imgs/cart/p24.png',
  distance: 1.8,
  sales: 1475,
  name: '陈罐西式茶货铺',
  desc: '我们在曾厝安终于找到了陈罐西式茶货铺，他们家的服务员真的超级热情，一口气给我们每个人泡了两份不一样的花茶来试吃他们家的松塔。他们家的松塔包装也是偏小清新的，我们购买了榛子味的松塔。打开包装，让我们异常震惊！！！他们家的包装居然和一封情酥的一模一样！！！小齐我真的感觉的受到了欺骗，不过还好松塔的颗数是一样的多的，这点给了我一丝丝安慰。▲价格（数量）：28元/盒 8个独立包装  ▲包装颜值：★★★★✩  ▲甜度：★★★✩✩  ▲酥脆：★★★✩✩  ▲口感：微甜，味道较清爽  ▲综合指数：★★★✩✩▲店址：国办路（曾厝垵店）'
},


  ],


    //history: [],
   // hot: ['新鲜芹菜', '大红枣', '滋补桂圆干'],
   // result: [
   /*     {
            id: 1,
           // url: '../details/details',
            img:'/imgs/cart/p8.jpg',
            title: '瓜子 100g',
            price: 0.01
        },
        {
            id: 2,
            url: '../details/details',
            img:'/imgs/cart/p8.jpg',
            title: '新鲜芹菜 500g',
            price: 0.02
        }
    ],
    showKeywords: false,
    keywords: ['山东肚脐橙', '湖南冰糖橙', '麻涌香蕉', '冰糖心苹果'],
    value: '',
    showResult: false,
},
cancelSearch() {
    this.setData({
        showResult: false,
        showKeywords: false,
        value: ''
    })
},
searchInput(e) {
    if(!e.detail.value){
        this.setData({
            showKeywords: false
        })
    }else{
        if(!this.data.showKeywords){
            timeId && clearTimeout(timeId);
            timeId = setTimeout(() => {
                this.setData({
                    showKeywords: true
                })
            }, 1000)
        }
    }
},
keywordHandle(e) {
    const text = e.target.dataset.text;
    this.setData({
        value: text,
        showKeywords: false,
        showResult: true
    })
    this.navdataHandle(text);
},
navdataHandle(value) {
    let history = this.data.history;
    const idx = history.indexOf(value);
    if (idx === -1) {
        // 搜索记录只保留8个
        if (navdata.length > 7) {
          navdata.pop();
        }
    } else {
      navdata.splice(idx, 1);
    }
    navdata.unshift(value);
    wx.setStorageSync('navdata', JSON.stringify(navdata));
    this.setData({
      navdata
    });
},
/*onLoad() {
    const history = wx.getStorageSync('history');
    if (history) {
        this.setData({
            history: JSON.parse(history)
        })
        console.log(this.data.history);
    }
}
})
*/




  currentTab: 0,
  navScrollLeft: 0
 },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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


    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  }
})

