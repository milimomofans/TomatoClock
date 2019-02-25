// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Num:0,
    allNum:0,
    restTime:0,
    taskTime:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      restTime:app.globalData.RestTime,
      taskTime:app.globalData.TaskTime
    })
  },
  sliderTask(e){
    app.globalData.TaskTime = e.detail.value
  },
  sliderRest(e){
    app.globalData.RestTime = e.detail.value
  }
})