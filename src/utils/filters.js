export default {
  string2YMDHM (val) {
    if (!val) return '--'
    return val.substring(0, 16)
  },
  string2YMD (val) {
    if (!val) return '--'
    return val.substring(0, 10)
  }
}
