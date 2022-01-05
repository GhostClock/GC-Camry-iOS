// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: car;

// ------静态数据------
const CONST_DATA = {
  // App版本
  AppVersion: "4.18.0",
  // UserAgent
  UserAgent: `GTMC_CarOwner_Yonyou/${this.AppVersion} (iPhone; iOS 15.2; Scale/3.00)Accept-Language: zh-Hans-CN;q=1, en-CN;q=0.9`,
  // CookieKey
  UserInfoKey: "USERINFO_KEY",
  // 车架号信息
  VinInfoKey: "VIN_INFO_KEY",
  // 当前版本号
  CurrentVersion: "1.3.1",
  // ContentType
  ContentTypeUrlencoded: "application/x-www-form-urlencoded",
  ContentTypeJson: "application/json",
  // 警告信息
  WarningMsg: [ 
    {
    "warnType": "V003",
    "warnTypeName": "右后门未关"
    },
    {
      "warnType": "V004",
      "warnTypeName": "左后门未关"
    },
    {
      "warnType": "V005",
      "warnTypeName": "右前门未关"
    },
    {
      "warnType": "V006",
      "warnTypeName": "左前门未关",
    },
    {
      "warnType": "V134",
      "warnTypeName": "发动机罩未关"
    },
    {
      "warnType": "V143",
      "warnTypeName": "左前门未锁",
    },
    {
      "warnType": "V145",
      "warnTypeName": "右后车窗未关"
    },
    {
      "warnType": "V146",
      "warnTypeName": "左后车窗未关"
    },
    {
      "warnType": "V147",
      "warnTypeName": "右前车窗未关"
    },
    {
      "warnType": "V148",
      "warnTypeName": "左前车窗未关"
    },
    {
      "warnType": "V149",
      "warnTypeName": "天窗未关"
    },
    {
      "warnType": "V172",
      "warnTypeName": "左后门未锁"
    },
    {
      "warnType": "V173",
      "warnTypeName": "右前门未锁"
    },
    {
      "warnType": "V174",
      "warnTypeName": "右后门未锁"
    },
    {
      "warnType": "V229",
      "warnTypeName": "闪光灯未关"
    },
    {
      "warnType": "V408",
      "warnTypeName": "尾灯未关"
    },
    {
      "warnType": "V409",
      "warnTypeName": "大灯未关"
    }
  ],
  // 组件尺寸
  DeviceSize: {
    '428x926': {
      small: { width: 176, height: 176 },
      medium: { width: 374, height: 176 },
      large: { width: 374, height: 391 }
    },
    '390x844': {
      small: { width: 161, height: 161 },
      medium: { width: 342, height: 161 },
      large: { width: 342, height: 359 }
    },
    '414x896': {
      small: { width: 169, height: 169 },
      medium: { width: 360, height: 169 },
      large: { width: 360, height: 376 }
    },
    '375x812': {
      small: { width: 155, height: 155 },
      medium: { width: 329, height: 155 },
      large: { width: 329, height: 345 }
    },
    '414x736': {
      small: { width: 159, height: 159 },
      medium: { width: 348, height: 159 },
      large: { width: 348, height: 357 }
    },
    '375x667': {
      small: { width: 148, height: 148 },
      medium: { width: 322, height: 148 },
      large: { width: 322, height: 324 }
    }, 
    '320x568': {
      small: { width: 141, height: 141 },
      medium: { width: 291, height: 141 },
      large: { width: 291, height: 299 }
    }
  }

}
// ------静态数据结束------

// ------请求URL------
const CAR_BASE_API = "https://carapp.gtmc.com.cn/api/"
const BAIDU_BASE_API = "https://api.map.baidu.com/"
const CAR_REQUEST_URL = {
  // 汽车VIM信息URL
  VinInfoURL: `${CAR_BASE_API}appgtmc/AppRepairRecordAction/loadUserData.json`,
  // 汽车经纬度URL
  PositionInfoURL: `${CAR_BASE_API}vhcApp/vhcNet/getVhcPositionInfo`,
  // 获取当前车辆信息(油耗，里程等)
  CurrentInfoURL: (phone, userId, vin) =>
    `${CAR_BASE_API}vhcApp/vhcNet/refreshVhcCondition?appVersion=${CONST_DATA.AppVersion}&carCode=&fyxDevice=2&phone=${phone}&type=&userId=${userId}&vin=${vin}`,
  // 获取当前车辆信息(名称，图片，车牌号等)
  CurrentVHCInfoURL: (phone, userId, vin) => 
    `${CAR_BASE_API}vhcApp/vhcNet/vhcInfo?appVersion=${CONST_DATA.AppVersion}&basePage=1&carCode=&fyxDevice=2&phone=${phone}&showPopup=1&userId=${userId}&vin=${vin}`,
  // 获取警告信息
  WarningMsgURL: (phone, userId, vin) => 
    `${CAR_BASE_API}vhcApp/warning/warningMsg?appVersion=${CONST_DATA.AppVersion}.0&carCode=5&fyxDevice=2&phone=${phone}&userId=${userId}&vin=${vin}`,
  
    // 经纬度逆编码URL
  BaiduPositionAddressURL: (ak, latitude, longitude) => 
    `${BAIDU_BASE_API}reverse_geocoding/v3/?ak=${ak}&output=json&coordtype=wgs84ll&location=${latitude},${longitude}&radius=1000&pois=1&coordtype=bd09ll&page_size=1&extensions_poi=1`,
  // 百度静态图片
  BaiduStaticPicURL: (ak, longitude, latitude, size) => 
    `${BAIDU_BASE_API}staticimage/v2?ak=${ak}&center=${longitude},${latitude}&width=${size.width}&height=${size.height}&zoom=15&copyright=1`,
  
  // 更新文件
  UpdateVersionURL: "https://gitee.com/GhostClock/gc-camry-ios/raw/master/version.json",
  // 手机抓包教程
  CaptureData: 'https://www.cnblogs.com/hong-fithing/p/12562448.html',
  // 打赏作者
  ActionDonation: 'https://gitee.com/GhostClock/gc-camry-ios/tree/master#6%E6%89%93%E8%B5%8F',
  // 背景图片
  BackgroundImage: "http://img1.tcdachun.com/180519/330808-1P51Z9454738.jpg",
  // 无数据背景图
  EmptyDataImage: "https://carappvideo.gtmc.com.cn//fs01//IFImage//carnetImage//img-819-PT-ZZB-089.png",
  // 丰田Icon  logo_black:黑色图标 logo_white:白色图标
  ToyotaIconImage: "https://gitee.com/GhostClock/gc-camry-ios/raw/master/resource/logo_black.PNG",
}
// ------请求URL结束------

class Base {
  constructor(arg = '') {
    this.arg = arg
    this._actions = {}
    this.init()
  }

  init(widgetFamily = config.widgetFamily) {
    // 组件大小：small,medium,large
    this.debugLog("组件初始化")
    this.widgetFamily = widgetFamily
    this.userInfo = this.getUserInfoDetail()
  }

  // 注册点击操作菜单
  registerAction(name, func) {
    this._actions[name] = func.bind(this)
  }

  //--------Cookie--------
  // 获取Cookie信息
  getUserInfo() {
    if (Keychain.contains(CONST_DATA.UserInfoKey)) {
      return Keychain.get(CONST_DATA.UserInfoKey)
    }
    return ""
  }
  // 设置Cookie信息
  setUserInfo(userInfo) {
    Keychain.set(CONST_DATA.UserInfoKey, userInfo)
  }
  // 移除Cookie信息
  removeUserInfo() {
    if (Keychain.contains(CONST_DATA.UserInfoKey)) {
      Keychain.remove(CONST_DATA.UserInfoKey)
    }
  }
  // 获取用户详细信息
  getUserInfoDetail() {
    this.userInfo = this.getUserInfo()
    let _userInfo = this.userInfo.split(" ")
    let _cookie = `${_userInfo[0]}`
    let _userId = `${_userInfo[1]}`
    let _phone = `${_userInfo[2]}`
    let _baiduAk = `${_userInfo[3]}`
    return { cookie: _cookie, userId: _userId, phone: _phone, ak: _baiduAk }
  }
  // 缓存车架号
  setVINInfo(vinInfo) {
    Keychain.set(CONST_DATA.VinInfoKey, vinInfo)
  }
  // 得到车架号
  getVINInfo() {
    let _vinInfo = {vin: "", vhcGradeCode: ""}
    if (Keychain.contains(CONST_DATA.VinInfoKey)) {
      let vinInfo= Keychain.get(CONST_DATA.VinInfoKey).split(" ")
      _vinInfo.vin = vinInfo[0]
      _vinInfo.vhcGradeCode = vinInfo[1]
    }
    return _vinInfo
  }
  // 移除车架号
  removeVINInfo() {
    if (Keychain.contains(CONST_DATA.VinInfoKey)) {
      Keychain.remove(CONST_DATA.VinInfoKey)
    }
  }

  //--------网络请求--------
  // 封装的网络请求
  // POST 请求
  async PostRequest(url, contentType, body, cookie) {
    let header = {
      "type": "1",
      "User-Agent": CONST_DATA.UserAgent,
      "Authorization": cookie,
      "appVersion": `${CONST_DATA.AppVersion}`,
      "fyxDevice": "2",
      "Content-Type": contentType
    }
    log(`开始POST网络请求: ${url}`)
    let request = new Request(url)
    request.headers = header
    request.method = "POST"
    request.body = JSON.stringify(body)
    return await (contentType == CONST_DATA.ContentTypeUrlencoded) ? request.loadString() : request.loadJSON()
  }

  // GET 请求  
  async GetRequest(url, contentType, cookie) {
    let request = new Request(url)
    let header = {
      "type": "1",
      "User-Agent": CONST_DATA.UserAgent,
      "Authorization": cookie,
      "appVersion": `${CONST_DATA.AppVersion}`,
      "fyxDevice": "2",
      "Content-Type": contentType
    }
    log(`开始GET网络请求: ${url}`)
    request.headers = header
    return await request.loadJSON()
  }
  //获取远程图片内容
  async loadImage(url, useCache = true) {
    const cacheKey = this.md5(url)
    const cacheFile = FileManager.local().joinPath(FileManager.local().temporaryDirectory(), cacheKey)
    // 判断是否有缓存
    if (useCache && FileManager.local().fileExists(cacheFile)) {
      return Image.fromFile(cacheFile)
    }
    try {
      const req = new Request(url)
      const img = await req.loadImage()
      // 存储到缓存
      FileManager.local().writeImage(cacheFile, img)
      return img
    } catch (e) {
      // 没有缓存+失败情况下，返回自定义的绘制图片（红色背景）
      let ctx = new DrawContext()
      ctx.size = new Size(100, 100)
      ctx.setFillColor(this._Color("#ECECEC"))
      ctx.fillRect(new Rect(0, 0, 100, 100))
      return ctx.getImage();
    }
  }

  //--------工具函数--------

  // md5 加密
  md5(string) {
    const safeAdd = (x, y) => {
      let lsw = (x & 0xFFFF) + (y & 0xFFFF)
      return (((x >> 16) + (y >> 16) + (lsw >> 16)) << 16) | (lsw & 0xFFFF)
    }
    const bitRotateLeft = (num, cnt) => (num << cnt) | (num >>> (32 - cnt))
    const md5cmn = (q, a, b, x, s, t) => safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b),
      md5ff = (a, b, c, d, x, s, t) => md5cmn((b & c) | ((~b) & d), a, b, x, s, t),
      md5gg = (a, b, c, d, x, s, t) => md5cmn((b & d) | (c & (~d)), a, b, x, s, t),
      md5hh = (a, b, c, d, x, s, t) => md5cmn(b ^ c ^ d, a, b, x, s, t),
      md5ii = (a, b, c, d, x, s, t) => md5cmn(c ^ (b | (~d)), a, b, x, s, t)
    const firstChunk = (chunks, x, i) => {
      let [a, b, c, d] = chunks;
      a = md5ff(a, b, c, d, x[i + 0], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)

      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)

      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)

      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      return [a, b, c, d]
    },
      secondChunk = (chunks, x, i) => {
        let [a, b, c, d] = chunks;
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
        b = md5gg(b, c, d, a, x[i], 20, -373897302)

        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)

        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)

        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

        return [a, b, c, d]
      },
      thirdChunk = (chunks, x, i) => {
        let [a, b, c, d] = chunks;
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)

        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)

        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
        d = md5hh(d, a, b, c, x[i], 11, -358537222)
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)

        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

        return [a, b, c, d]
      },
      fourthChunk = (chunks, x, i) => {
        let [a, b, c, d] = chunks;
        a = md5ii(a, b, c, d, x[i], 6, -198630844)
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)

        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)

        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)

        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)
        return [a, b, c, d]
      }
    const binlMD5 = (x, len) => {
      /* append padding */
      x[len >> 5] |= 0x80 << (len % 32)
      x[(((len + 64) >>> 9) << 4) + 14] = len;
      let commands = [firstChunk, secondChunk, thirdChunk, fourthChunk],
        initialChunks = [
          1732584193,
          -271733879,
          -1732584194,
          271733878
        ];
      return Array.from({ length: Math.floor(x.length / 16) + 1 }, (v, i) => i * 16)
        .reduce((chunks, i) => commands
          .reduce((newChunks, apply) => apply(newChunks, x, i), chunks.slice())
          .map((chunk, index) => safeAdd(chunk, chunks[index])), initialChunks)

    }
    const binl2rstr = input => Array(input.length * 4).fill(8).reduce((output, k, i) => output + String.fromCharCode((input[(i * k) >> 5] >>> ((i * k) % 32)) & 0xFF), '')
    const rstr2binl = input => Array.from(input).map(i => i.charCodeAt(0)).reduce((output, cc, i) => {
      let resp = output.slice()
      resp[(i * 8) >> 5] |= (cc & 0xFF) << ((i * 8) % 32)
      return resp
    }, [])
    const rstrMD5 = string => binl2rstr(binlMD5(rstr2binl(string), string.length * 8))
    const rstr2hex = input => {
      const hexTab = (pos) => '0123456789abcdef'.charAt(pos);
      return Array.from(input).map(c => c.charCodeAt(0)).reduce((output, x, i) => output + hexTab((x >>> 4) & 0x0F) + hexTab(x & 0x0F), '')
    }
    const str2rstrUTF8 = unicodeString => {
      if (typeof unicodeString !== 'string') throw new TypeError('parameter ‘unicodeString’ is not a string');
      const cc = c => c.charCodeAt(0);
      return unicodeString
        .replace(/[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
          c => String.fromCharCode(0xc0 | cc(c) >> 6, 0x80 | cc(c) & 0x3f))
        .replace(/[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
          c => String.fromCharCode(0xe0 | cc(c) >> 12, 0x80 | cc(c) >> 6 & 0x3F, 0x80 | cc(c) & 0x3f))
    }
    const rawMD5 = s => rstrMD5(str2rstrUTF8(s))
    const hexMD5 = s => rstr2hex(rawMD5(s))
    return hexMD5(string)
  }

  // 时间
  getRefreshDate() {
    var myDate = new Date()
    var M = myDate.getMonth(); // 月
    M += 1
    var mStr = `${M}`
    if (M < 10) {
      mStr = `0${M}`
    }

    var D = myDate.getDate();  //日 
    var dStr = `${D}`
    if (D < 10) {
      dStr = `0${D}`
    }

    var H = myDate.getHours(); //时
    var hStr = `${H}`
    if (H < 10) {
      hStr = `0${H}`
    }

    var mm = myDate.getMinutes();  //分 
    var mmStr = `${mm}`
    if (mm < 10) {
      mmStr = `0${mm}`
    }
    var refreshTime = `${mStr}月${dStr}日 ${hStr}:${mmStr}`
    return refreshTime
  }
  // 日志打印
  debugLog(message, isDebug = true) {
    if (isDebug) {
      log(message)
    }
  }

  //--------UI操作类--------
  // 字体
  _Font(size) {
    var font = new Font("PingFang SC", size)
    return font
  }
  _Color(hex, alpha = 1) {
    let _color = new Color(hex, alpha)
    return _color
  }
  // 弹出一个通知
  async notify(title, body = "") {
    let notif = new Notification()
    notif.title = title
    notif.body = body
    notif.sound = "accept"
    return await notif.schedule()
  }
  // 给图片加一层半透明遮罩
  async shadowImage(img, color = '#000000', opacity = 0.7) {
    let ctx = new DrawContext()
    // 获取图片的尺寸
    ctx.size = img.size
    ctx.drawImageInRect(img, new Rect(0, 0, img.size['width'], img.size['height']))
    ctx.setFillColor(new Color(color, opacity))
    ctx.fillRect(new Rect(0, 0, img.size['width'], img.size['height']))

    return ctx.getImage()
  }

  addClearSpace(stack, w, h) {
    let spaceStack = stack.addStack()
    spaceStack.size = new Size(w, h)
    return spaceStack
  }

  showAlert(message) {
    const alert = new Alert()
    alert.title = "提示"
    alert.message = message
    alert.addAction("确定")
    alert.presentAlert()
  }

}

// 运行环境
// @running.start
const Running = async (Widget, default_args = '') => {
  let M = null
  // 判断hash是否和当前设备匹配
  if (config.runsInWidget) {
    M = new Widget(args.widgetParameter || '')
    const W = await M.render()
    Script.setWidget(W)
    Script.complete()
  } else if (config.runsWithSiri) {
    M = new Widget(args.shortcutParameter || '')
    const data = await M.siriShortcutData()
    Script.setShortcutOutput(data)
  } else {
    let { act, data, __arg, __size } = args.queryParameters
    M = new Widget(__arg || default_args || '')
    if (__size) M.init(__size)
    if (!act || !M['_actions']) {
      // 弹出选择菜单
      const actions = M['_actions']
      const _actions = []
      const alert = new Alert()
      alert.title = M.name
      alert.message = M.desc
      for (let _ in actions) {
        alert.addAction(_)
        _actions.push(actions[_])
      }
      alert.addCancelAction('取消操作')
      const idx = await alert.presentSheet()
      if (_actions[idx]) {
        const func = _actions[idx]
        await func()
      }
      return
    }
    let _tmp = act.split('-').map(_ => _[0].toUpperCase() + _.substr(1)).join('')
    let _act = `action${_tmp}`
    if (M[_act] && typeof M[_act] === 'function') {
      const func = M[_act].bind(M)
      await func(data)
    }
  }
}

class Widget extends Base {

  constructor(arg) {
    super(arg)
    this.styleType = arg
    this.name = '凯美瑞 小组件'
    this.desc = '丰田凯美瑞 车辆桌面组件展示'

    let userInfo = this.getUserInfoDetail()
    this.cookie = `${userInfo.cookie}`
    this.userId = `${userInfo.userId}`
    this.phone = `${userInfo.phone}`
    this.ak = `${userInfo.ak}`
    if (config.runsInApp) {
      // 1.获取cookie和userID
      if (this.cookie.length == 0) {
        // 2.如果没有获取到,弹出Alert让其输入
        this.registerAction('获取用户信息', this.actionUserInfo)
      } else {
        this.NetworkingAction(this.cookie, this.userId, this.phone, this.ak)
      }
      this.registerAction('移除用户信息', this.removeUserInfo)
      this.registerAction('抓包教程', this.captureData)  
      this.registerAction("检查更新", this.checkUpdate)
      this.registerAction('打赏作者', this.actionDonation)
      this.registerAction('当前版本: v' + CONST_DATA.CurrentVersion, () => {})
    } else if (config.runsInWidget) {
      if (this.cookie.length > 0 && this.userId.length > 0 && this.phone.length > 0 && this.ak.length > 0) {
        this.NetworkingAction(this.cookie, this.userId, this.phone, this.ak)
      }
    }
  }

  /**
 * 渲染函数，函数名固定
 * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
 */
  async render() {
    let data = await this.getData()
    const screenSize = Device.screenSize()
    const size = CONST_DATA.DeviceSize[`${screenSize.width}x${screenSize.height}`] || DEVICE_SIZE['428x926']
    if (data) {
      if (typeof data === 'object') {
        switch (this.widgetFamily) {
          case 'large': {
            return await this.renderLarge(size.large, data)
          }
          case 'medium': {
            return await this.renderMedium(size.medium, data)
          }
          default: {
            return await this.renderSmall(size.small, data)
          }
        }
      } else {
        // 返回组件错误信息
        return await this.renderError()
      }
    } else {
      return await this.renderEmpty()
    }
  }

  // -------------组件渲染--------------
  /**
   * 渲染小尺寸组件
   */
  async renderSmall(size, data) {
    let widget = new ListWidget()
    widget.setPadding(5, 5, 5, 5)
    let gradient = new LinearGradient()
    gradient.locations = [0, 1]
    gradient.colors = [new Color("#f5f8fd"), new Color("#b7d3e3")]  
    widget.backgroundGradient = gradient
    
    let bgStack = widget.addStack()
    bgStack.size = new Size(size.width - 20, size.height - 15)
    bgStack.layoutVertically()
    // bgStack.backgroundColor = Color.red()
    
    // 标题
    var titleStack = bgStack.addStack()
    titleStack.layoutHorizontally()
    // titleStack.backgroundColor = Color.blue()
    let title = titleStack.addText(`CAMRY ${data.vhcGradeCode}`)
    title.lineLimit = 1
    title.font = Font.italicSystemFont(20)
    title.textColor = Color.black()
    
    // 剩余油量
    let isLowFuel = data.fuelPro <= 30
    var fuelProStr = `油量: ${data.fuelPro}%`
    var fuelProTitle = bgStack.addText(fuelProStr)
    fuelProTitle.font = isLowFuel ? Font.italicSystemFont(15) : this._Font(15)
    fuelProTitle.textColor = isLowFuel ? Color.red() : Color.black()
  
    // 续航  
    var mileageVehStr = `续航: ${data.mileageVeh}km`
    var mileageVehTitle = bgStack.addText(mileageVehStr)
    mileageVehTitle.font = this._Font(15)
    mileageVehTitle.textColor = Color.black()

    // 更新时间
    var refreshDate = `更新时间: ${data.refreshDate}`
    var refreshDateTie = bgStack.addText(refreshDate)
    refreshDateTie.font = this._Font(11)
    refreshDateTie.textColor = Color.black()
  
    // 地址信息
    var carAddress = `${data.address}`
    var carAddressTitle = bgStack.addText(`实时位置: ${carAddress}`)
    carAddressTitle.font = this._Font(10)
    carAddressTitle.lineLimit = 2
    carAddressTitle.textColor = Color.black()
  
    // 门窗信息,采用通知的形式
    let warning = data.warningMsg.length > 0
    if (warning) {
      this.notify("门窗消息提醒", `${data.warningMsg}`)
    }
    return widget
  }
  /**
   * 渲染中尺寸组件
   */
  async renderMedium(size, data) {
    var widget = new ListWidget()
    widget.backgroundColor = this._Color("#ECECEC", 1)
    let nextRefresh = Date.now() + 1000 * 30 // add 30 second to now
    widget.refreshAfterDate = new Date(nextRefresh)

    // 背景Stack, 用于整体布局
    let bgStack = widget.addStack()
    bgStack.layoutHorizontally()
    bgStack.size = new Size(size.width, size.height)
    
    // 左
    let leftBgStack = bgStack.addStack()
    leftBgStack.size = new Size(bgStack.size.width / 2.1, bgStack.size.height)
    
    let leftSpaceStack = this.addClearSpace(leftBgStack, 20, leftBgStack.size.height)
    
    // 文本
    var textContentStack = leftBgStack.addStack()
    textContentStack.layoutVertically()
    textContentStack.size = new Size(leftBgStack.size.width - leftSpaceStack.size.width, leftBgStack.size.height)

    // 可以在这里定制化你自己想要的Title,建议不要太长，因为可能显示不下 
    // 例如：`凯美瑞 ${data.vhcGradeCode} 豪华版(${data.registNo})` registNo为车牌号，
    let titleString = `CAMRY ${data.vhcGradeCode}`
    let title = textContentStack.addText(titleString)
    title.font = Font.boldSystemFont(20) // 这里可以修改字体，默认为斜体,想改为斜体的话：italicSystemFontboldSystemFont(21)
    title.textColor = Color.black()
    
    // 剩余油量
    let isLowFuel = data.fuelPro <= 30
    var fuelProStr = `油量: ${data.fuelPro}%`
    var fuelProTitle = textContentStack.addText(fuelProStr)
    fuelProTitle.font = isLowFuel ? Font.italicSystemFont(16) : this._Font(16)
    fuelProTitle.textColor = isLowFuel ? Color.red() : Color.black()
    
    // 续航  
    var mileageVehStr = `续航: ${data.mileageVeh}km`
    var mileageVehTitle = textContentStack.addText(mileageVehStr)
    mileageVehTitle.font = this._Font(16)
    mileageVehTitle.textColor = Color.black()

    // 总里程
    var mileageTotalStr = `总行程数: ${data.mileageTotal}km`
    var mileageTotalTitle = textContentStack.addText(mileageTotalStr)
    mileageTotalTitle.font = this._Font(11)
    mileageTotalTitle.textColor = Color.black()

    // 更新时间
    var refreshDate = `更新时间: ${data.refreshDate}`
    var refreshDateTie = textContentStack.addText(refreshDate)
    refreshDateTie.font = this._Font(11)
    refreshDateTie.textColor = Color.black()

    // 地址信息
    var carAddress = `${data.address}`
    var carAddressTitle = textContentStack.addText(`实时位置: ${carAddress}`)
    carAddressTitle.font = this._Font(11)
    carAddressTitle.lineLimit = 2
    carAddressTitle.textColor = Color.black()

    // 右
    let rightContentStack = bgStack.addStack()
    rightContentStack.size = new Size(bgStack.size.width - leftBgStack.size.width, bgStack.size.height)
    rightContentStack.backgroundImage = await this.RequestBDStaticPic(this.ak, data.longitude, data.latitude, rightContentStack.size)
    
    let rightGradientStack = rightContentStack.addStack()
    rightGradientStack.layoutVertically()
    rightGradientStack.size = rightContentStack.size
    let gradient = new LinearGradient()
    gradient.startPoint = new Point(1, 0)
    gradient.endPoint = new Point(0, 1)
    gradient.locations = [1, 0.75, 0.5, 0.25, 0]
    gradient.colors = [this._Color("#ECECEC", 1), this._Color("#ECECEC", 1), 
                       this._Color("#ECECEC", 0.5), this._Color("#ECECEC", 0.25), 
                       this._Color("#ECECEC", 0)]
    rightGradientStack.backgroundGradient = gradient
    
    // LOGO
    let logoContentStack = rightGradientStack.addStack()
    logoContentStack.layoutHorizontally()
    logoContentStack.size = new Size(rightGradientStack.size.width - 15, 20)
    let logoData = await this.loadImage(CAR_REQUEST_URL.ToyotaIconImage)

    this.addClearSpace(logoContentStack, logoContentStack.size.width - 80, 20)// 

    let logoStack = logoContentStack.addStack()
    logoStack.size = new Size(logoData.size.width, 20)
    let logoImage = logoStack.addImage(logoData)
    logoImage.size = logoStack.size
    logoImage.rightAlignImage()

    // Car
    var carStack = rightGradientStack.addStack()
    carStack.size = new Size(rightContentStack.size.width - 15, rightContentStack.size.height - logoContentStack.size.height - 25)
    var carImage = carStack.addImage(await this.loadImage(data.modelImage))
    carImage.imageSize = carStack.size
    
    // 门窗信息,采用通知的形式
    let warning = data.warningMsg.length > 0
    if (warning) {
      this.notify("门窗消息提醒", `${data.warningMsg}`)
    }

    return widget
  }
  /**
   * 渲染大尺寸组件
   */
  async renderLarge(size, data) {
    let widget = new ListWidget()
    widget.backgroundImage = await this.shadowImage(await this.loadImage(CAR_REQUEST_URL.EmptyDataImage))
    // TODO
    let text = widget.addText('大尺寸组件正在开发，敬请期待')
    text.font = this._Font(18)
    text.textColor = Color.white()
    return widget
  }

  /**
   * 渲染空数据组件
   */
  async renderEmpty() {
    const widget = new ListWidget()

    widget.backgroundImage = await this.shadowImage(await this.loadImage(CAR_REQUEST_URL.EmptyDataImage))

    const text = widget.addText('欢迎使用 Camry 小组件')
    switch (this.widgetFamily) {
      case 'large':
        text.font = Font.blackSystemFont(18)
        break
      case 'medium':
        text.font = Font.blackSystemFont(18)
        break
      case 'small':
        text.font = Font.blackSystemFont(12)
        break
    }
    text.centerAlignText()
    text.textColor = Color.white()

    return widget
  }

  /**
   * 渲染错误信息
   */
  async renderError() {
    const widget = new ListWidget()
    widget.backgroundImage = await this.shadowImage(await this.loadImage(CAR_REQUEST_URL.EmptyDataImage))

    const text = widget.addText("数据有误，请重新输入的用户信息")
    switch (this.widgetFamily) {
      case 'large':
        text.font = Font.blackSystemFont(18)
        break
      case 'medium':
        text.font = Font.blackSystemFont(18)
        break
      case 'small':
        text.font = Font.blackSystemFont(12)
        break
    }
    text.textColor = Color.red()
    text.centerAlignText()

    return widget
  }

  // -------------组件结束--------------

  // 获取Cookie和UserID
  async actionUserInfo() {
    const alert = new Alert()
    alert.title = '组件声明'
    alert.message = `
    1.小组件需要使用到您的丰云行应用的账号，首次使用需要用到丰云行的令牌和用户信息，但是无法无法直接从该应用获取\n\r
    2.小组件不会收集您的个人账户信息，所有账号信息将存在 iCloud 或者 iPhone 上但也请您妥善保管自己的账号\n\r
    3.小组件是开源、并且完全免费的，由凯美瑞车主开发，所有责任与广汽丰田公司无关\n\r
    开发者: GhostClock\n\r
    `
    alert.addAction('同意')
    alert.addCancelAction('不同意')
    const id = await alert.presentAlert()
    if (id === -1) return
    await this._userInfo()
  }

  async _userInfo() {
    log("_userInfo")
    var alert = new Alert()
    alert.title = "登录数据"
    alert.addTextField("请粘贴您抓取的数据", "")
    alert.addTextField("请输入百度地图的AK", "")
    alert.addAction("确定")
    alert.addCancelAction("取消")

    const id = await alert.presentAlert()
    if (id === -1) return
    let userInfo = alert.textFieldValue(0)
    let _ak = alert.textFieldValue(1)
    try {
      let jsonData = JSON.parse(userInfo)
      // 解析数据
      var _cookie = jsonData["data"]["jwt"]
      var _userId = jsonData["data"]["rData"]["userId"]
      var _phone = jsonData["data"]["rData"]["telPhone"]
      log(_userId + "-" + _phone)
      // 本地保存数据
      let cacheUserInfo = _cookie + " " + _userId + " " + _phone + " " + _ak
      this.setUserInfo(cacheUserInfo)
        // 开始执行本地逻辑
      this.NetworkingAction(_cookie, _userId, _phone, _ak)
      this.notify('设置成功', '桌面组件稍后将自动刷新')
    } catch (error) {
      log(error)
      this.showAlert("请输入正确的数据")
    }
  }

  async getData() {
    // 判断用户是否已经登录
    return (Keychain.contains(CONST_DATA.UserInfoKey) && this.userInfo.length > 0) ? await this.bootstrap() : false
  }

  async bootstrap() {
    return await this.NetworkingAction(this.cookie, this.userId, this.phone, this.ak)
  }

  async NetworkingAction(cookie, userId, phone, ak) {
    var carInfoData = {
      address: "", // 地址
      registNo: "", // 地址
      vhcName: "",  // 名称
      modelImage: "", // 图片
      mileageTotal: "", // 总行程数
      mileageVeh: "", // 续航
      fuelPro: "", // 剩余油量
      vin: "", // 车架号
      longitude: "", //经度
      latitude: "", // 维度
      warningMsg: "", //警告信息
      resultCode: "",
      vhcGradeCode: "", // 汽车型号
      refreshDate: this.getRefreshDate() //刷新时间
    }
    // 1.必须先获取车架号 -> 经测试这个接口特别容易失败，所以做缓存处理
    // 先从本地缓存取
    let vinInfo = this.getVINInfo()
    let vin = vinInfo.vin
    let vhcGradeCode = vinInfo.vhcGradeCode
    if (vin.length == 0) {
      log("本地无车架号和车型，开始请求车架号和车型")
      // 本地缓存取不到就去请求网络
      let _vinInfo = await this.RequestCarVinInfo(cookie, userId)
      if (_vinInfo.resultCode != '1') {
        this.cookitInvalid(_vinInfo.errMsg)
        return vinInfo
      }
      vin = _vinInfo.vin
      vhcGradeCode = _vinInfo.vhcGradeCode

      this.setVINInfo(vin + " " + vhcGradeCode)
    } 
    log(vinInfo)
    carInfoData.vin = vin
    carInfoData.vhcGradeCode = vhcGradeCode
    this.debugLog(`车架号: ${carInfoData.vin}`)

    // 2.获取汽车位置
    let positionData = await this.RequestCarPosition(cookie, phone, userId, carInfoData.vin, ak)
    if (positionData.resultCode != 200) {
      this.cookitInvalid(positionData.errMsg)
      return positionData
    }

    carInfoData.address = positionData.address
    carInfoData.longitude = positionData.longitude
    carInfoData.latitude = positionData.latitude
    this.debugLog(`汽车地址: ${carInfoData.address} ${carInfoData.longitude}-${carInfoData.latitude}`)

    // 3.获取当前车辆信息(油耗，里程等)  
    let currentInfo = await this.RequestCarCurrentInfo(phone, cookie, userId, carInfoData.vin)
    carInfoData.fuelPro = currentInfo.fuelPro
    carInfoData.mileageVeh = currentInfo.mileageVeh
    carInfoData.mileageTotal = currentInfo.mileageTotal
    this.debugLog(`剩余油量: ${carInfoData.fuelPro}`)

    // 4.获取当前车辆信息(名称，图片，车牌号等)  
    let vhcNames = await this.CarCurrentVHCInfo(phone, userId, cookie, carInfoData.vin)
    carInfoData.vhcName = vhcNames.vhcName.slice(2)
    carInfoData.modelImage = vhcNames.modelImage
    carInfoData.registNo = vhcNames.registNo
    this.debugLog(`汽车名称: ${carInfoData.vhcName}`)

    // 5.获取门窗警告信息
    let warningInfo = await this.CarWarningMsg(phone, userId, cookie, carInfoData.vin)  
    log(warningInfo)
    carInfoData.warningMsg = warningInfo.warningMsg
    var doorInfo = carInfoData.warningMsg.length > 0 ? `${carInfoData.warningMsg}` : "所有门窗都已经关好"
    this.debugLog(`门窗信息: ${doorInfo}`)
    return carInfoData
  }
  // Cookie失效
  cookitInvalid(errMsg) {
    this.removeUserInfo()
    this.notify("提示", `所有用户信息都已经清除(${_vinInfo.errMsg})`)
  }

  //-----网络请求-----
  // 获取车架号信息
  async RequestCarVinInfo(cookie, userId) {
    let body = `appVersion=${CONST_DATA.AppVersion}&fyxDevice=2&userId=${userId}&versionType=1230`
    let stringData = await this.PostRequest(CAR_REQUEST_URL.VinInfoURL, CONST_DATA.ContentTypeUrlencoded, body, cookie)
    let jsonData = JSON.parse(stringData)
    let resultCode = jsonData.resultCode
    if (resultCode != "1") {
      // Cookie过期
      log(`Cookie已经过期, errorCode: ${resultCode}`)
      return {resultCode: jsonData.resultCode, errMsg: jsonData.errMsg}
    }
    let row = jsonData.data.rows[0]
    let _vin = row.vin
    let _vhcGradeCode = row.vhcGradeCode
    _vhcGradeCode = _vhcGradeCode.split(" ")[1]
    return {resultCode: jsonData.resultCode, vin: _vin, vhcGradeCode: _vhcGradeCode}
  }

  // 获取汽车经纬度信息 -> 地理反编码
  async RequestCarPosition(cookie, phone, userId, vin, ak) {
    var body = {
      "phone": phone,
      "vin": vin,
      "userId": userId,
    }
    let data = await this.PostRequest(CAR_REQUEST_URL.PositionInfoURL, CONST_DATA.ContentTypeJson, body, cookie)
    if (data.resultCode != 200) {
      return {resultCode: data.resultCode, errMsg: data.errMsg}
    }
    var longitude = data["data"]["longitude"]
    var latitude = data["data"]["latitude"]
    log(longitude + " " + latitude)
    // 地理反编码
    let url = CAR_REQUEST_URL.BaiduPositionAddressURL(ak, latitude, longitude)
    let resultData = await this.GetRequest(url, CONST_DATA.ContentTypeJson, '')
    var addressComponent = resultData["result"]["addressComponent"]
    let city = addressComponent.city
    var district = addressComponent["district"]
    var street = addressComponent["street"]
    var _address = `${city}${district}${street}`
    return {resultCode: data.resultCode, address: `${_address}`, longitude: `${longitude}`, latitude: `${latitude}` }
  }
  // 请求百度静态图片
  async RequestBDStaticPic(ak, longitude, latitude, size) {
    let staticPicUrl = CAR_REQUEST_URL.BaiduStaticPicURL(ak, longitude, latitude, size)
    return await this.loadImage(staticPicUrl)
  }
  // 获取当前车辆信息(油耗，里程等)
  async RequestCarCurrentInfo(phone, cookie, userId, vin) {
    let url = CAR_REQUEST_URL.CurrentInfoURL(phone, userId, vin)
    let jsonData = await this.GetRequest(url, CONST_DATA.ContentTypeJson, cookie)
    /*
      "fuelPro": 25.0, 剩余油量
      "mileageVeh": 123.0, 续航
      "mileageTotal": 923.0, 总行程数
      "mileageCounterA": 923.8, 行程A
      "mileageCounterB": 923.8, 行程B
      "fuelWearAvg": 10.0, 加满油油耗
      "fuelFilledWearAvg": 9.2, 当前油耗
    */
    var data = jsonData["data"]
    return {
      mileageTotal: data["mileageTotal"],
      mileageVeh:  data["mileageVeh"],
      fuelPro: data["fuelPro"],
      mileageCounterA: data["mileageCounterA"],
      mileageCounterB: data["mileageCounterB"],
      fuelWearAvg: data["fuelWearAvg"],
      fuelFilledWearAvg: data["fuelFilledWearAvg"],
    }
  }
  // 获取当前车辆信息(名称，图片，车牌号等)
  async CarCurrentVHCInfo(phone, userId, cookie, vin) {
    let url = CAR_REQUEST_URL.CurrentVHCInfoURL(phone, userId, vin)
    var contentType = `${CONST_DATA.ContentTypeJson};charset=UTF-8`
    let jsonData = await this.GetRequest(url, contentType, cookie)
    var data = jsonData["data"]
    /*
        "registNo": "粤Bxxxxx", 车牌号
        "vhcName": "全新第八代凯美瑞", 名称
        "modelCode": "MXV", 
        "modelImage": "https://carappvideo.gtmc.com.cn/fs01/IFImage/carnetImage/img-819-PT-ZZB-089.png", // 图片
    */
    return {
      registNo: data["registNo"],
      vhcName: data["vhcName"],
      modelImage: data["modelImage"]
    }
  }
  // 获取车辆门窗信息
  async CarWarningMsg(phone, userId, cookie, vin) {
    let url = CAR_REQUEST_URL.WarningMsgURL(phone, userId, vin)
    let result = await this.GetRequest(url, CONST_DATA.ContentTypeJson, cookie)
    let warnTypes = result.data.warnTypes
    let msg = ""
    for (let index in warnTypes) {
      let localItem = CONST_DATA.WarningMsg[index]
      let item = warnTypes[index]
      if (item.warnType == localItem.warnType && item.existStatus != 1) {
        msg += `${localItem.warnTypeName} `
      }
    }
    return { warningMsg: msg }
  }
  // 检查更新
  async CheckUpdateAction() {
    const UPDATE_FILE = 'GC-Camry-iOS.js'
    const FILE_MGR = FileManager[module.filename.includes('Documents/iCloud~') ? 'iCloud' : 'local']()
    const request = new Request(CAR_REQUEST_URL.UpdateVersionURL)
    const responseString = await request.loadJSON()
    log(responseString)
    let response = JSON.parse(responseString)
    console.log(`远程版本：${response?.version}`)
    if (response?.version === CONST_DATA.CurrentVersion) return this.notify('无需更新', '远程版本一致，暂无更新')
    console.log('发现新的版本')

    const log = response?.changelog.join('\n')
    const alert = new Alert()
    alert.title = '更新提示'
    alert.message = `是否需要升级到${response?.version.toString()}版本\n\r${log}`
    alert.addAction('更新')
    alert.addCancelAction('取消')
    const id = await alert.presentAlert()
    if (id === -1) return
    await this.notify('正在更新中...')
    const REMOTE_REQ = new Request(response?.download)
    const REMOTE_RES = await REMOTE_REQ.load()
    FILE_MGR.write(FILE_MGR.joinPath(FILE_MGR.documentsDirectory(), UPDATE_FILE), REMOTE_RES)

    await this.notify('桌面组件更新完毕！')

  }

  //-----网络请求结束-----

  // 手机抓包教程
  async captureData() {
    Safari.open(CAR_REQUEST_URL.CaptureData)
  }
  // 打赏作者
  async actionDonation() {
    Safari.open(CAR_REQUEST_URL.ActionDonation)
  }
  // 检查更新
  async checkUpdate() {
    const UPDATE_FILE = "GC-Camry-iOS"
    await this.CheckUpdateAction()
  }
}

await Running(Widget)

