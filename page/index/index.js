var app = getApp();
var server = require('../../utils/server');

import * as echarts from '../component/ec-canvas/echarts';

function initChart(canvas, width, height) {
 const chart = echarts.init(canvas, null, {
  width: width,
  height: height
 });
 canvas.setChart(chart);

 //这里复制了官方示例配置
 var option = {
  title: {
   text: '游乐项目人数图'
  },
  tooltip: {},
  legend: {
   data: ['人数']
  },
  xAxis: {
   data: ["方特城堡", "恐龙危机", "海螺湾", "星际航班", "飞跃极限", "火流星","宇宙博览会","唐古拉雪山","生命之光",
  "极地快车","飞翔之歌","逃出恐龙谷","暴风眼","电影魔术大揭秘","双层木马","丛林的故事","空中飞舞","海盗船","星球达人秀","聊斋"]
  },
  yAxis: {},
  series: [{
   name: '人数',
   type: 'bar',
   data: [160, 150, 110, 105, 33, 44,44,44,44,44,44,44,44,44,44,44,44,44,44]
  }]
 };
 chart.setOption(option);
 return chart;
}


Page({
	data: {
    ec:{
      onInit:initChart
     },
		filterId: 1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
		address: '定位中…',
		banners: [
			{
				id: 3,
        img: '/imgs/index/banner4.jpg',
				url: '',
				name: '毕业季优惠'
			},
			{
				id: 1,
				img: '/imgs/index/banner5.jpg',
				url: '',
				name: '证件照优惠'
			},
			{
				id: 2,
        img: '/imgs/index/banner6.jpg',
				url: '',
				name: '个人写真优惠'
			}
		],
	
		// shops: app.globalData.shops
    shops: [
      {
        id: 1,
        img: '/imgs/index/index3.jpg',
        distance: 1.0,
        sales: 1775,
        name: '方特城堡'
      },
      {
        id: 2,
        img: '/imgs/index/index4.jpg',
        distance: 2.4,
        sales: 1284,
        name: '恐龙危机'
      },
      {
        id: 3,
        img: '/imgs/index/index5.jpg',
        distance: 2.3,
        sales: 2039,
        name: '海螺湾'
      },
      {
        id: 4,
        img: '/imgs/index/index6.jpg',
        distance: 3.4,
        sales: 400,
        name: '星际航班'
			},
			{
        id: 5,
        img: '/imgs/index/index7.jpg',
        distance: 3.4,
        sales: 400,
        name: '飞越极限'
			},
			{
        id: 6,
        img: '/imgs/index/index8.jpg',
        distance: 3.4,
        sales: 400,
        name: '火流星'
			},
			{
        id: 7,
        img: '/imgs/index/index9.jpg',
        distance: 3.4,
        sales: 400,
        name: '宇宙博览会'
			},
			{
        id: 8,
        img: '/imgs/index/index10.jpg',
        distance: 3.4,
        sales: 400,
        name: '唐古拉雪山'
			},
			{
        id: 9,
        img: '/imgs/index/index11.jpg',
        distance: 3.4,
        sales: 400,
        name: '生命之光'
			},
			{
        id: 10,
        img: '/imgs/index/index21.jpg',
        distance: 3.4,
        sales: 400,
        name: '极地快车'
			},
			{
        id: 11,
        img: '/imgs/index/index12.jpg',
        distance: 3.4,
        sales: 400,
        name: '飞翔之歌'
			},
			{
        id: 12,
        img: '/imgs/index/index13.jpg',
        distance: 3.4,
        sales: 400,
        name: '逃出恐龙谷'
			},
			{
        id: 13,
        img: '/imgs/index/index22.jpg',
        distance: 3.4,
        sales: 400,
        name: '暴风眼'
			},
			{
        id: 14,
        img: '/imgs/index/index15.jpg',
        distance: 3.4,
        sales: 400,
        name: '电影魔术大揭秘'
			},
			{
        id: 15,
        img: '/imgs/index/index16.jpg',
        distance: 3.4,
        sales: 400,
        name: '双层木马'
			},
			{
        id: 16,
        img: '/imgs/index/index17.jpg',
        distance: 3.4,
        sales: 400,
        name: '丛林的故事'
			},
			{
        id: 17,
        img: '/imgs/index/index18.jpg',
        distance: 3.4,
        sales: 400,
        name: '空中飞舞'
			},
			{
        id: 18,
        img: '/imgs/index/index23.jpg',
        distance: 3.4,
        sales: 400,
        name: '海盗船'
			},
			{
        id: 19,
        img: '/imgs/index/index19.jpg',
        distance: 3.4,
        sales: 400,
        name: '星球达人秀'
			},
			{
        id: 20,
        img: '/imgs/index/index20.jpg',
        distance: 3.4,
        sales: 400,
        name: '聊斋'
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



 

