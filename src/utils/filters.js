/* eslint-disable */

export default {
  string2YMDHM (val) {
    if (!val) return '--'
    return val.substring(0, 16)
  },
  string2YMD (val) {
    if (!val) return '--'
    return val.substring(0, 10)
  },
  ymdhm (val) {
    if (!val) return ''
    if (val instanceof Date) {
      return val.Format('yyyy-MM-dd hh:mm')
    }
    if (typeof(val) === 'string' && val.length > 16) {
      return val.substring(16, 0)
    }
  },
  hm (val) {
    let param = 'hh:mm'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  ymd (val) {
    if (!val) return ''
    if (val instanceof Date) {
      return val.Format('yyyy-MM-dd')
    }
    if (typeof(val) === 'string') {
      return val.substring(10, 0).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$1-$2-$3')
    }
    return val
  },
  yyyymmdd (val) {
    let param = 'yyyyMMdd'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  md (val) {
    let param = 'MM-dd'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  ym (val) {
    let param = 'yyyy-MM'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  yyyy (val) {
    let param = 'yyyy'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  mm (val) {
    let param = 'MM'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  publishTime (val) {
    let param = 'MM-dd hh:mm'
    if (val instanceof Date) {
      return val.Format(param) || '--'
    }
    return new Date(val).Format(param) || '--'
  },
  parentHomeWorkCardTime (val) {
    if (!(val instanceof Date)) {
      val = new Date(val)
    }
    let day = val.getDay()
    let chineseDay = null
    switch (day) {
      case 0:
        chineseDay = '周日'
        break
      case 1:
        chineseDay = '周一'
        break
      case 2:
        chineseDay = '周二'
        break
      case 3:
        chineseDay = '周三'
        break
      case 4:
        chineseDay = '周四'
        break
      case 5:
        chineseDay = '周五'
        break
      case 6:
        chineseDay = '周六'
        break
    }
    return `${val.Format('yyyy-MM-dd')} ${chineseDay} ${val.Format('hh:mm')}`
  },
  defaultAvatar (val) {
    if (!val) return defaultAvatar
    return val
  },
  num2Abc (idx) {
    return String.fromCharCode(idx + 65)
  },
  placeholderNum2Abc (idx) {
    return `选项${String.fromCharCode(idx + 65)}`
  },
  fileIcon (fileName) {
    if (fileName === 'directory') return folder
    let suffix = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase()
    switch (suffix) {
      case 'doc':
      case 'docx':
        return docx
      case 'xls':
      case 'xlsx':
        return xlsx
      case 'ppt':
      case 'pptx':
        return pptx
      case 'pdf':
        return pdf
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
      case 'webp':
        return image
      case 'mp4':
      case 'mp3':
      case 'avi':
      case 'mov':
      case 'flv':
        return video
      case 'zip':
        return zip
      default:
        return unknown
    }
  },
  formatFileSize (fileSize) {
    if (!fileSize) return null

    const kb = 1024
    const mb = 1024 * 1024
    const gb = mb * 1024
    const tb = gb * 1024
    if (fileSize < kb) {
      return fileSize + 'b'
    }
    if (fileSize >= kb && fileSize < mb) {
      return (fileSize / kb).toFixed(0) + 'K'
    }
    if (fileSize >= mb && fileSize < gb) {
      return (fileSize / mb).toFixed(0) + 'M'
    }
    if (fileSize >= gb && fileSize < tb) {
      return (fileSize / gb).toFixed(0) + 'G'
    }
    if (fileSize >= tb) {
      return (fileSize / tb).toFixed(0) + 'T'
    }
  },

  sex (val) {
    if (val === 'Female') return girl
    return boy
  },

  sexLabel (val) {
    if (val === 'Female') {return '女'}
    if (val === 'Male') {return '男'}
    return ''
  },
  rmb (val) {
    if (!val) {
      return '0.00元'
    }
    val = val.toString().replace(/\$|\,/g, '')
    if (isNaN(val)) {
      val = '0'
    }
    let sign = (val == (val = Math.abs(val)))
    val = Math.floor(val * 100 + 0.50000000001)
    let cents = val % 100
    val = Math.floor(val / 100).toString()
    if (cents < 10) {
      cents = '0' + cents
    }
    for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
      val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
    }

    return (((sign) ? '' : '-') + val + '.' + cents + '元')
  },
  summary (val, length) {
    // 超过length长度的val，进行截断
    if (!val) {
      return ''
    }
    return val.length > length ? val.substr(0, length) + '......' : val
  }
}
