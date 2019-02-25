// pages/task/task.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks:[
      {name:"工作",url:"../../images/icon/gongzuobao.png"},
      {name:"学习",url:"../../images/icon/xuexi.png"},
      {name:"思考",url:"../../images/icon/sikao.png"},
      {name:"写作",url:"../../images/icon/tubiaozhizuomoban-.png"},
      {name:"运动",url:"../../images/icon/ziyuan.png"},
      {name:"阅读",url:"../../images/icon/yuedu.png"}
    ],
    TabIndex:0,
    taskName:"工作",
  },
  Tab(e){
    this.setData({
      TabIndex:e.currentTarget.dataset.index,
      taskName:e._relatedInfo.anchorRelatedText
    }) 
  },
  start(){
    app.globalData.taskName = this.data.taskName
    wx.navigateTo({
      url:"../index/index"
    })
  }
})