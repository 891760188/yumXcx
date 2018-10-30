//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      /**
       * 访问时间的触发点是在小程序端调用 wx.cloud.init 方法，
       * 且其中的 traceUser 参数传值为 true
       */
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
