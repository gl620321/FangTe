Page({

  path_planning:function(){
    wx.switchTab({
      url: '/page/cart/cart',
    })

  },
  data: {
    markers: [],  //地图参数：
    latitude: "41.963456", //纬度 
    longitude: "123.418769",  //经度
  },
  regionchange(e) {
    //console.log(e)
  },
  markertap(e) {
    //console.log(e)
  },
  controltap(e) {
    //console.log(e)
  },

  //获得地图
  getMyMap(e) {
    let that = this;
     const mapLatitude = 41.963456,
          mapLongitude = 123.418769;
    wx.getLocation({
      type: 'wgs84', 
      success(res){
        that.setData({
          latitude: mapLatitude,
          longitude: mapLongitude,
          markers: [{
            latitude: mapLatitude,
            longitude: mapLongitude,
            width: 40,
            height: 40,
            callout: {
              'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '您的位置',
              'padding': '8rpx', 'boxShadow': '0 0 5rpx #333','borderRadius':'4rpx'
            }

          }],
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyMap()
  },
  data: {
    dataArr: [{
        "AB_MonthDay": "超火爆",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "方特城堡",
          "AB_Money": "160",
          "AB_Remark": "火爆",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }, {
          "AB_LeiBie": "恐龙危机",
          "AB_Money": "150",
          "AB_Remark": "火爆",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }, {
          "AB_LeiBie": "海螺湾",
          "AB_Money": "110",
          "AB_Remark": "火爆",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "收入",
        }, ]
      },
      {
        "AB_MonthDay": "火爆",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "星际航班",
          "AB_Money": "105",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "人气",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "飞跃极限",
          "AB_Money": "33",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "火流星",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "宇宙博览会",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "唐古拉雪山",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "生命之光",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "极地快车",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "飞翔之歌",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "逃出恐龙谷",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "暴风眼",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "电影魔术大揭秘",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "双层木马",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "丛林的故事",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "空中飞舞",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "海盗船",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "星球达人秀",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "聊斋",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
    ],
    Time:0,

  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '方特地图'
    })
  },
  onPageScroll: function (e) {
    // console.log(e.scrollTop);

    // let index = e.scrollTop / 71
    // index = parseInt(index);
    // console.log(index);
    // let data = this.data.dataArr[index]

    let topHeight = 120
    var that = this;
    var query = wx.createSelectorQuery().in(that);
    query.selectViewport().scrollOffset()
    query.selectAll("#header").boundingClientRect();
    // query.select("#header").boundingClientRect();
    query.exec(function (res) {
      // console.log(res);
      let time = ''
      var resultIndex = res[1].findIndex((v) => {
        return v.top === topHeight;
      });
      if (resultIndex == -1) {
        let tempArr = []
        for (let index = 0; index < res[1].length; index++) {
          let data = res[1][index];
          tempArr.push(data.top)
        }
        let tempIndex = that.getClosestValueIndex(tempArr, topHeight)
        // console.log(tempIndex);
        time = res[1][tempIndex].dataset.selectdata
      } else {
        time = res[1][resultIndex].dataset.selectdata
      }
      console.log(time);

      that.setData({
        Time: time,
      });
    });

  },

  getClosestValueIndex: function (arr, num) {
    var newArr = [];
    arr.map(function (x) {
      // 对数组各个数值求差值
      newArr.push(Math.abs(x - num));
    });
    // 求最小值的索引
    var index = newArr.indexOf(Math.min.apply(null, newArr));
    // return arr[index];
    return index;
  },

  ClickCell() {
    console.log("点击cell");

  },
 
})
