Component({
  data: {
    selected: 0,
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/assets/tab_home.png",
        "selectedIconPath": "/assets/tab_home_sel.png"
      },
      {
        "pagePath": "/pages/welfare/index",
        "text": "福利",
        "iconPath": "/assets/tab_welfare.png",
        "selectedIconPath": "/assets/tab_welfare_sel.png"
      },
      {
        "pagePath": "/pages/mine/index",
        "text": "我的",
        "iconPath": "/assets/tab_mine.png",
        "selectedIconPath": "/assets/tab_mine_sel.png"
      }
    ]
  },

  lifetimes: {
    attached() {
      // 组件被创建时，默认选中首页
      this.setData({
        selected: 0
      });
    }
  },

  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index;
      const path = this.data.list[index].pagePath;
      wx.switchTab({ url: path });
      this.setData({ selected: index });
    }
  }
}); 