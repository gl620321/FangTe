var app = getApp()
Page({
  data: {
    cart: {
      count: 0,
      total: 0,
      list: {}
    },
    showCartDetail: false
  },
  onLoad: function (options) {
    var shopId = options.id;
    for (var i = 0; i < app.globalData.shops.length; ++i) {
      if (app.globalData.shops[i].id == shopId) {
        this.setData({
          shop: app.globalData.shops[i]
        });
        break;
      }
    }
  },
  onShow: function () {
    this.setData({
      classifySeleted: this.data.goodsList[0].id
    });
  },
  tapAddCart: function (e) {
    this.addCart(e.target.dataset.id);
  },
  tapReduceCart: function (e) {
    this.reduceCart(e.target.dataset.id);
  },
  addCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    this.data.cart.list[id] = num + 1;
    this.countCart();
  },
  reduceCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    if (num <= 1) {
      delete this.data.cart.list[id];
    } else {
      this.data.cart.list[id] = num - 1;
    }
    this.countCart();
  },
  countCart: function () {
    var count = 0,
      total = 0;
    for (var id in this.data.cart.list) {
      var goods = this.data.goods[id];
      count += this.data.cart.list[id];
      total += goods.price * this.data.cart.list[id];
    }
    this.data.cart.count = count;
    this.data.cart.total = total;
    this.setData({
      cart: this.data.cart
    });
  },
  follow: function () {
    this.setData({
      followed: !this.data.followed
    });
  },
  onGoodsScroll: function (e) {
    if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }

    var scale = e.detail.scrollWidth / 570,
      scrollTop = e.detail.scrollTop / scale,
      h = 0,
      classifySeleted,
      len = this.data.goodsList.length;
    this.data.goodsList.forEach(function (classify, i) {
      var _h = 70 + classify.goods.length * (46 * 3 + 20 * 2);
      if (scrollTop >= h - 100 / scale) {
        classifySeleted = classify.id;
      }
      h += _h;
    });
    this.setData({
      classifySeleted: classifySeleted
    });
  },
  tapClassify: function (e) {
    var id = e.target.dataset.id;
    this.setData({
      classifyViewed: id
    });
    var self = this;
    setTimeout(function () {
      self.setData({
        classifySeleted: id
      });
    }, 100);
  },
  showCartDetail: function () {
    this.setData({
      showCartDetail: !this.data.showCartDetail
    });
  },
  hideCartDetail: function () {
    this.setData({
      showCartDetail: false
    });
  },
  submit: function (e) {
    server.sendTemplate(e.detail.formId, null, function (res) {
      if (res.data.errorcode == 0) {
        wx.showModal({
          showCancel: false,
          title: '恭喜',
          content: '订单发送成功！下订单过程顺利完成，本例不再进行后续订单相关的功能。',
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack();
            }
          }
        })
      }
    }, function (res) {
      // console.log(res)
    });
  }, 
  onTest: function() {
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 1000,
      mask: true
    })
   
  },
  formSubmit: function(e){
    const that = this;
    var warn = "";//弹框时提示的内容
    var flag = true;//判断信息输入是否完整
    // that.setData({
    //   first: e.detail.value.input,
    //   second: e.detail.value.input1
    // })
    if (e.detail.value.input == "") {
      warn = "请填写您的姓名！";
    } else if (e.detail.value.input1 == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.input1))) {
      warn = "您已成功预约";
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转
      wx.navigateTo({
        url: '../mine/mine?area=' + e.detail.value.area + '&tel=' + e.detail.value.input + "&addre=" + e.detail.value.input1
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      
    }
    //如果信息填写不完整，弹出输入框
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }else{
      wx.showToast({
        title: '预约成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
    }
  }
});
