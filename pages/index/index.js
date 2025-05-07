const app = getApp()

Page({
  data: {
    activeTab: 0,
    bannerList: [
      {
        imageUrl: '/assets/banner.png',
        link: '/pages/detail/index?id=1'
      },
      {
        imageUrl: '/assets/banner.png',
        link: '/pages/detail/index?id=2'
      },
      {
        imageUrl: '/assets/banner.png',
        link: '/pages/detail/index?id=3'
      }
    ],
    featureBlocks: [
      [
        {
          title: "查看角色武将战法",
          image: "/assets/自研配将.png"
        },
        {
          title: "人工智能一键配将",
          image: "/assets/智能配将.png"
        },
        {
          title: "公告资讯一手掌握",
          image: "/assets/资讯公告.png"
        },
        {
          title: "热门阵容一网打尽",
          image: "/assets/热门阵容.png"
        }
      ],
      [
        {
          title: "查看角色武将战法11",
          image: "/assets/自研配将.png"
        },
        {
          title: "人工智能一键配将111",
          image: "/assets/智能配将.png"
        },
       
      ],
    ]
  },

  onLoad() {
    // 页面加载时初始化
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
    }
  },

  onShow() {
    // 页面显示时更新选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
    }
  },

  onTabChange(e) {
    this.setData({ activeTab: Number(e.currentTarget.dataset.index) });
    // 这里可以根据 activeTab 切换不同的内容
  },

  // 轮播图点击事件
  onBannerTap(e) {
    const index = e.currentTarget.dataset.index;
    const link = this.data.bannerList[index].link;
    wx.navigateTo({
      url: link
    });
  }
})
