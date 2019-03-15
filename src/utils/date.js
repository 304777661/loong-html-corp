// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) {
  let o = {
    // 月份
    'M+': this.getMonth() + 1,
    // 日
    'd+': this.getDate(),
    // 小时
    'h+': this.getHours(),
    // 分
    'm+': this.getMinutes(),
    // 秒
    's+': this.getSeconds(),
    // 季度
    'q+': Math.floor((this.getMonth() + 3) / 3),
    // 毫秒
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
    }
  }
  return fmt
}

export default {
  isLeapYear (year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
  },
  getMonthDays (year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
  },
  generateWeekList (date) {
    let curDayOfAMonth = date.getDate()
    let curDayOfAWeek = date.getDay()
    let weekLists = []
    for (let i = 0; i < curDayOfAWeek; i++) {
      let beforeDate = new Date(date)
      let t = beforeDate.setDate(curDayOfAMonth - (i + 1))
      let newDate = new Date(t)
      weekLists.unshift({
        dayOfAMonth: newDate.getDate(),
        dayOfAWeek: curDayOfAWeek - (i + 1),
        active: false,
        date: newDate
      })
    }
    weekLists.push({
      dayOfAMonth: curDayOfAMonth,
      dayOfAWeek: curDayOfAWeek,
      active: true,
      date: date
    })
    for (let i = curDayOfAWeek + 1; i < 7; i++) {
      let afterDate = new Date(date)
      let t = afterDate.setDate(curDayOfAMonth + i - curDayOfAWeek)
      let newDate = new Date(t)
      weekLists.push({
        dayOfAMonth: newDate.getDate(),
        dayOfAWeek: i,
        active: false,
        date: newDate
      })
    }
    return weekLists
  }
}
