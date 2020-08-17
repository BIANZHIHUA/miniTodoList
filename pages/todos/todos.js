// pages/todos/todos.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    list: [
      {
        check: false,
        content: 'Learning HTML',
      },
      {
        check: true,
        content: 'Learning Css',
      },
      {
        check: false,
        content: 'Learning JavaScript',
      }
    ],
    leftCount: 2
  },
  /**
   * 将输入框中的事同步到data中
  */
  bindinputHandler: function (e) {
    this.setData({ input: e.detail.value })
  },
  /**
   * 向输入框中添加事件
   */
  addListHandler: function () {
    if (!this.data.input) return
    const list = this.data.list
    list.push({ check: false, content: this.data.input })
    this.setData({ list: list, input: '', leftCount: ++this.data.leftCount })
  },
  /**
   * 任务完成
   */
  checkBindtapHandler: function (e) {
    const index = e.currentTarget.dataset.key
    const targetItem = this.data.list[index]
    targetItem.check = !targetItem.check
    this.setData({ list: this.data.list })
    this.data.leftCount += targetItem.check ? -1 : 1
    this.setData({ leftCount: this.data.leftCount })
  },
  /**
   * 删除任务
   */
  removeCatchtapHandler: function (e) {
    const index = e.currentTarget.dataset.key
    const list = this.data.list
    var getLeftCount = this.data.leftCount
    getLeftCount += this.data.list[index].check ? 0 : -1
    list.splice(index, 1)
    this.setData({ list: list, leftCount: getLeftCount })
  },
  /**
   * 清空已完成的任务
   */
  clearBindtapHandler: function () {
    // var list = this.data.list
    // list = list.filter(item => !item.check)
    // this.setData({list:list})
    let list = []
    this.data.list.forEach(element => {
      if (!element.check) { list.push(element) }
    });
    this.setData({ list: list })
  },
  /**
   * 全部选中
   */
  allBindtap: function () {
    this.data.list.forEach(item => item.check = true)
    this.data.leftCount = 0 
    this.setData({list:this.data.list,leftCount:this.data.leftCount})
  }
})