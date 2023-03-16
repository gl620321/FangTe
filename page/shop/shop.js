/*var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
		
	},
	onLoad: function (options) {
		// var shopId = options.id;
		// for (var i = 0; i < app.globalData.shops.length; ++i) {
		// 	if (app.globalData.shops[i].id == shopId) {
		// 		this.setData({
		// 			shop: app.globalData.shops[i]
		// 		});
		// 		break;
		// 	}
		// }
	},
	

});
*/
var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
		filterId: 1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
		address: '定位中…',
		banners: [
			{
				id: 3,
        img: '/imgs/index/banner7.jpg',
				url: '',
				name: '毕业季优惠'
			},
			{
				id: 1,
				img: '/imgs/index/banner8.jpg',
				url: '',
				name: '证件照优惠'
			},
			{
				id: 2,
        img: '/imgs/index/banner9.jpg',
				url: '',
				name: '个人写真优惠'
			}
		],
	
		// shops: app.globalData.shops
    shops: [
      {
        id: 1,
        img: '/imgs/shop/1.jpg',
        distance: 1.0,
        sales: 1775,
        name: '疯狂汉堡'
      },
      {
        id: 2,
        img: '/imgs/shop/2.jpg',
        distance: 2.4,
        sales: 1284,
        name: '嘟比汉堡'
      },
      {
        id: 3,
        img: '/imgs/shop/3.jpg',
        distance: 2.3,
        sales: 2039,
        name: '临水餐厅'
      },
      {
        id: 4,
        img: '/imgs/shop/4.jpg',
        distance: 3.4,
        sales: 400,
        name: '科幻披萨'
			},
			{
        id: 5,
        img: '/imgs/shop/5.jpg',
        distance: 3.4,
        sales: 400,
        name: '飞美食总动员'
			},
			{
        id: 6,
        img: '/imgs/shop/6.jpg',
        distance: 3.4,
        sales: 400,
        name: '情牵一线牛肉面'
			},
			{
        id: 7,
        img: '/imgs/shop/7.jpg',
        distance: 3.4,
        sales: 400,
        name: '火流星面食馆'
			},
			{
        id: 8,
        img: '/imgs/shop/8.jpg',
        distance: 3.4,
        sales: 400,
        name: '科幻餐厅'
			},
			{
        id: 9,
        img: '/imgs/shop/9.jpg',
        distance: 3.4,
        sales: 400,
        name: '海景茶餐厅'
			},
			{
        id: 10,
        img: '/imgs/shop/10.jpg',
        distance: 3.4,
        sales: 400,
        name: '梦幻王国餐厅'
			},
			{
        id: 11,
        img: '/imgs/shop/11.png',
        distance: 3.4,
        sales: 400,
        name: '熊记汉堡'
			},
			{
        id: 12,
        img: '/imgs/shop/12.jpg',
        distance: 3.4,
        sales: 400,
        name: '爱尚披萨王'
			},
			{
        id: 13,
        img: '/imgs/shop/13.jpeg',
        distance: 3.4,
        sales: 400,
        name: '东方美食城'
			},
			{
        id: 14,
        img: '/imgs/shop/14.jpg',
        distance: 3.4,
        sales: 400,
        name: '中华美食街'
			},
			{
        id: 15,
        img: '/imgs/shop/15.jpg',
        distance: 3.4,
        sales: 400,
        name: '牛聋子粉面馆'
			},
			{
        id: 16,
        img: '/imgs/shop/16.png',
        distance: 3.4,
        sales: 400,
        name: '童梦餐厅'
			},
			{
        id: 17,
        img: '/imgs/shop/17.jpeg',
        distance: 3.4,
        sales: 400,
        name: '苗家鱼粉'
			},
			{
        id: 18,
        img: '/imgs/shop/18.jpg',
        distance: 3.4,
        sales: 400,
        name: '文和友小龙虾'
			},
    ]
	},

	onShow: function () {
	},
	onScroll: function (e) {
		if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}
	},
	tapSearch: function () {
		wx.navigateTo({url: 'search'});
	},
	toNearby: function () {
		var self = this;
		self.setData({
			scrollIntoView: 'nearby'
		});
		self.setData({
			scrollIntoView: null
		});
	},
	tapFilter: function (e) {
		switch (e.target.dataset.id) {
			case '1':
				this.data.shops.sort(function (a, b) {
					return a.id > b.id;
				});
				break;
			case '2':
				this.data.shops.sort(function (a, b) {
					return a.sales < b.sales;
				});
				break;
			case '3':
				this.data.shops.sort(function (a, b) {
					return a.distance > b.distance;
				});
				break;
		}
		this.setData({
			filterId: e.target.dataset.id,
			shops: this.data.shops
		});
	},
	tapBanner: function (e) {
		var name = this.data.banners[e.target.dataset.id].name;
		wx.showModal({
			title: '提示',
			content: '您点击了“' + name + '”活动链接，活动页面暂未完成！',
			showCancel: false
		});
	}
});



 

