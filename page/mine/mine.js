var app = getApp();
var server = require('../../utils/server');
Page({
  data: {},
  onLoad: function (options) {
    this.setData({
      name: options.input,
      tel: options.input1
    })
  },
  bindtoyao:function(){
wx.reLaunch({
  url: '/page/yao/yao',
})
  },
  bindtojinian:function(){
    wx.reLaunch({
      url: '/page/jinian/jinian',
    })
      },
      bindtoset:function(){
        wx.reLaunch({
          url: '/page/set/set',
        })
          },
	onShow: function () {
		this.setData({
			userInfo: app.globalData.userInfo
		});
	}
});

