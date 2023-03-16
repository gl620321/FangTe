var server = require('./utils/server');
// wx.getUserInfo({

//   success: function (res) {

//     that.setData({

//       nickName: res.userInfo.nickName,

//       avatarUrl: res.userInfo.avatarUrl,

//     })

//   },

// })
App({
	onLaunch: function () {
		console.log('App Launch')
		var self = this;
		var rd_session = wx.getStorageSync('rd_session');
		console.log('rd_session', rd_session)
		if (!rd_session) {
			self.login();
		} else {
			wx.checkSession({
				success: function () {
					// 登录态未过期
					console.log('登录态未过期')
					self.rd_session = rd_session;
					self.getUserInfo();
				},
				fail: function () {
					//登录态过期
					self.login();
				}
			})
		}

    if (!wx.cloud) {
      console.error('请使用 2.2.3 ')
    } else {
      wx.cloud.init({
        env: 'partyassistant-bdd77f',
        traceUser: true,
      })
    }

    this.globalData = {

    }
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
 
	globalData: {
		hasLogin: false
	},
	rd_session: null,
	login: function() {
		var self = this;
		wx.login({
			success: function (res) {
				console.log('wx.login', res)
				server.getJSON('/WxAppApi/setUserSessionKey', {code: res.code}, function (res) {
					console.log('setUserSessionKey', res)
					self.rd_session = res.data.data.rd_session;
					self.globalData.hasLogin = true;
					wx.setStorageSync('rd_session', self.rd_session);
					self.getUserInfo();
				});
			}
		});
	},
	getUserInfo: function() {
		var self = this;
		wx.getUserInfo({
			success: function(res) {
				console.log('getUserInfo', res)
				self.globalData.userInfo = res.userInfo;
				server.getJSON('/WxAppApi/checkSignature', {
					rd_session: self.rd_session,
					result: res
				}, function (res) {
					console.log('checkSignature', res)
					if (res.data.errorcode) {
						// TODO:验证有误处理
					}
				});
			}
		});
	}
})
