/**
 * Created by HZL on 2016/4/20.
 */
/**
 * 首页
 */
DataOpration = {
  LIST: "list",
  ADD: "add",
  UPDATE: "update",
  UPDATENODE: "updatenode",
  GET: "get",
  DELETE: "delete",
  COUNT: "getCount",
  ADDNODE: "addNode",
  CLEAR: "clear",
  DELETENODE: "deleteNode",
  IMPORT: "import",
  GETCOUNT: "reCount",
  TASKLIST: "taskList",
  TASKSTART: "taskStart",
  TASKPAUSE: "taskPause",
  REFRESHCOUNT: "resetCount",
  SMARTGROUPLIST: "smartgrouplist",
  CHECKNODECOUNT: "checknodecount",
  ORDERIMPORT: "orderimport",
  ORDERLIST: "orderlist",
  ORDERDELETE: "orderdelete",
  SENDEMAIL: "sendemail",
  REFRESHSG: "refreshsg"
};

SettingParamNames = {
  NAME: 'user_name'
};

CONTENT_TYPE = {
  INPUT: "input",
  NUMBER: 'number',
  NUMBER_RANGE: "number-range",
  DATE: "date",
  DATE_RANGE: "date-range",
  LIST: "list",
  SELECT: "select-str",
  RELATIVE_TIME: "relative-time",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  CASCADE: "cascade",
  COUNT_RANGE: "count-range"
};


SEARCH_TYPE = {
  EMAIL: "email",
  NUMBER: "number",
  DATE_INTERVAL: "date_interval",
  SELECT: "select",
  TEXT: "text"
};

var txtCn = {
  "importColumn": "导入列",
  "importColumnName": "导入列名称",
  "transferTable": "导入表",
  "transferColumn": "关联列",
  "transferTableSuc": "导入表成功",
  "loginTime": "上次登录时间",
  "memberScore": "会员积分",
  "companyBalance": "公司余额",
  "setting": "设置",
  "start": "开始",
  "people": "人",

  "/login.html": "易回眸-智能营销 | 登录",
  "login": {
    "title": "欢迎使用智能营销",
    "login": "登录",
    "useName": "请输入用户名",
    "pwd": "请输入密码",
    "forgetPwd": "忘记密码？",
    "loginTime": "十天免登录",
  },

  "/index.html": "易回眸-智能营销-首页",
  "firstL": "营销指标",
  "firstR": "成功营销/总营销 人次",
  "firstM": "成功营销人次",
  "firstB": "总营销人次",
  "secondR": "营销收益/营销成本 元",
  "secondL": "ROI指标",
  "secondM": "营销收益",
  "secondB": "营销成本",
  "thirdR": "未营销的会员/会员总数",
  "thirdL": "会员指标",
  "thirdB": "会员总数",
  "chart": "会员转化指标",
  "chart7": "最近7天",
  "chart1": "最近1个月",
  "chart3": "最近3个月",

  "/smartgroups.html": "易回眸-智能分组",
  "sgConSwitch": "智能分组条件开关",
  "refresh": "刷新",
  "plusCondition": "新建条件",
  "smartGroup": "智能分组",

  "/companies.html": "易回眸-公司管理",
  "/customers.html": "易回眸-用户管理",
  "/FixGroupMembers.html": "易回眸-会员列表",

  "addMember": "新建会员",
  "search": "查询",
  "nick": "昵称",
  "importNick": "请输入昵称",
  "tel": "手机号码",
  "importTel": "请输入手机号码",
  "email": "邮箱",
  "importEmail": "请输入邮箱",
  "addGroup": "加入分组",
  "fixGroup": "变更分组",
  "delGroup": "移出分组",
  "memberList": "会员列表",
  "memSumCount": "总会员数：",
  "memberCon": "会员内容",
  "orderCon": "订单内容",
  "otherCon": "其他内容",
  "confirm": "确认",
  "close": "关闭",
  "selGroup": "选择分组",
  "name": "名称",
  "importName": "请输入名称",
  "add": "新建",

  "/fixgroups.html": "易回眸-标签分组",

  "importGroupList": "标签分组列表",
  "newImportGroup": "新建标签",
  "ViewProgress": "导入进度",
  "addMemberSuc": "新增会员成功！",
  "addGroupSuc": "加入分组成功！",
  "fixGroupSuc": "变更分组成功！",
  "operand": "操作对象(双击选中)",
  "cancelSuc": "取消成功！",
  "delSuc": "删除成功！",
  "copyFail": "复制失败！",
  "nameIsnull": "用户名不能为空！",

  "/individuation.html": "易回眸-智能营销-个性化编辑",

  "emailList": "邮件模版列表",
  "import": "添加",
  "addSmsTem": "新建短信模板",
  "src": "源码",
  "cancel": "取消",
  "isDel": "是否删除",
  "save": "保存",
  "template": "模板",
  "head": "头部",
  "img": "图片",
  "bottom": "底部",
  "saveTemplate": "保存模板类型",
  "send": "发送",
  "addTemplate": "新建模板",
  "check": "查看",
  "clear": "清空",
  "width": "宽度",
  "height": "高度",
  "del": "删除",

  "/individuations.html": "易回眸-邮件营销",

  "skipPrompt": "您输入的内容尚未保存，确定离开此页面吗？",
  "individuation": {
    "importTem": "添加模版",
    "name": "模版名称",
    "temCon": "模板内容",
    "email": "发件人邮箱",
    "sendName": "发件人名称",
    "subject": "邮件主题",
    "signature": "短信签名"
  },

  "/mailjobs.html": "易回眸-邮件报表",

  "sendTime": "发送时间",
  "importStartTime": "请输入开始时间",
  "importEndTime": "请输入结束时间",
  "brand": "品牌",
  "brandList": {'1': '品牌1', '2': '品牌2', '3': '品牌3'},
  "taskList": "任务列表",
  "importTaskName": "请输入任务名称",
  "taskName": "任务名称",

  "/members.html": "易回眸-会员列表",

  "fileErr": "上传文件有误",
  "serial": "编号绑定",
  "colName": "列名",
  "param": "参数",
  "paramErr": "参数不能重复",
  "memberFileIsNull": "会员文件不能为空",
  "orderFileIsNull": "订单文件不能为空",
  "uploadSuc": "上传成功",
  "checkList": "是否查看任务列表?",
  "fileErrMsg": "上传的CSV文件标题长度超过2000字，检查文件再次上传。如果问题仍然存在，请与系统管理员联系。",
  "fileFormatErr": "上传文件支持CSV,XLSX",

  "list": "列表",
  "upload": "上传",
  "bind": "绑定关系",
  "memberFile": "会员文件",
  "importMember": "导入会员",

  "/minor.html": "易回眸-智能营销",
  "/my_strategy.html": "易回眸-我的策略",

  "strategyCon": "我的策略",
  "strategyName": "策略名称",

  "/customIndex.html": "易回眸-自定义首页",
  "customIndex": {
    "customIndexChart": "自定义图表",
    "StaticChart": "设置静态报表",
    "DynamicChart": "设置动态图表",
    "customIndex": "自定义指数",
    "setIndexTxt": "设置指数",
    "editIndex": "需要编辑的指数",
    "showIndex": "需要展示的指数",
    "IndexCondition": "指数条件",
    "flushIndex": "指数刷新频率",
    "showChart": "需要展示的报表",
    "chartType": "报表类型",

  },


  "/parameterSetting.html": "易回眸-等级配置",

  "addLv": "新建等级",
  "lvSetting": "等级设置",
  "scoreSetting": "积分设置",
  "lvConfig": "等级配置",
  "brandConfig": "品牌配置",

  "/preview.html": "易回眸-邮件预览",
  "homePage": "首页",
  "mail": "邮件",
  "page": "页",
  "total": "共",
  "info": "条信息",
  "perPage": "每页",
  "bar": "条",
  "current": "当前是",
  "prePage": "上一页",
  "nextPage": "下一页",
  "endPage": "末页",
  "skip": "跳转",
  "txt": "文字",
  "errMes": "当前页数大于总页数",
  "filter": "筛选",
  "plus": "合并",
  "minus": "剔除",
  "sendSuccess": "发送成功",
  "click": "点击",
  "invalidTel": "无效手机号",
  "open": "打开",
  "filterCount": "过滤数量",
  "formatError": "格式错误",
  "onceSubmitRepeat": "单次提交中重复",
  "sendUnreg": "以往发送退订",
  "backEmail": "退回邮件",
  "serverReject": "服务器拒收",
  "emailAddressInvalid": "邮箱地址无效",
  "sendInvalid": "以往发送无效",
  "unreg": "退订",
  "from": "从",
  "to": "到",
  "be": "为",
  "dataIsNull": "值不能为空",
  "errmes1": "该节点关联子节点",
  "errmes2": "该节点关联父节点",
  "errmes3": "删除该节点子节点和父节点会被删除",

  "/smartgroup.html": "易回眸-智能营销",
  "sgList": "智能分组列表",
  "addSmartGroup": "新建智能分组",
  "like": "包含",
  "noLike": "不包含",
  "equal": "等于",
  "noEqual": "不等于",
  "in": "属于",
  "noIn": "不属于",
  "lessThan": "小于",
  "moreThan": "大于",
  "moreThanOrEqual": "大于等于",
  "lessThanOrEqual": "小于等于",
  "year": "年",
  "month": "月",
  "day": "日",
  "hour": "小时",
  "sel": "-请选择-",
  "sms": "短信",
  "addSG": "新建智能分组",

  "/smsjobs.html": "易回眸-短信报表",
  "personalitySms": "个性化短信",
  "saveStrategy": "保存策略",
  "noData": "没有数据",

  "/smsTemplate.html": "易回眸-短信营销",

  "taskInfo": "任务信息",
  "totalCase": "总体情况",
  "clickCase": "点击情况",
  "clickMap": "点击热图",
  "smsTemplate": "短信模板",
  "selConNoeditor": "选中的内容不可编辑",
  "selConEditor": "请选择要编辑的内容",

  "/smsTotalCase.html": "易回眸-短信报表",
  "/tasks.html": "易回眸-导入进度",
  "/totalCase.html": "易回眸-邮件报表",

  "client": "客户端统计",
  "taskData": "任务详细统计数据",
  "dayPart": "发送七天分时段统计",


  "/users.html": "易回眸-用户管理",


  "/reportCoord.html": "易回眸-维度配置",
  "reportCoord": {
    "customCoord": "自定义维度配置",
    "coordList": "维度列表",
    "edit": "修改",
    "customMeasure": "自定义度量配置",
  },


  "/workflow.html": "易回眸-营销流程",

  "setSuc": "设置成功",
  "checkSuc": "检查成功",
  "saveSuc": "保存成功",
  "runSuc": "运行成功",
  "stopSuc": "停止成功",
  "clearSuc": "清除成功",
  "copySuc": "拷贝成功",
  "modSuc": "修改成功",
  "publishSuc": "发布成功",

  "work": {
    "title": "工作流报表",
    "labelName1": "购买人数:",
    "labelName2": "购买订单数:",
    "labelName3": "购买金额:",
    "labelName4": "客单价:",
    "labelName5": "回购率:",
    "labelName6": "未付款订单数:",
    "labelName7": "未付款金额:",
    "labelName8": "未付款客单价:",
    "labelName9": "roi:",
    "flowTitle": "新建工作流",
    "labelName10": "工作流名称",
    "msg": "工作流名称不能为空！",
    "labelName11": "活动品牌",
    "errNameRep": "工作流名称重复",
    "errNameNull": "工作流名称不能为空",

  },

  "flowList": "营销流程列表",

  "/workflows.html": "易回眸-营销流程",

  "preview": "预览图",
  "finish": "完成",
  "flowCheck": "流程验证",
  "play": "运行",
  "pause": "暂停",
  "stop": "结束",
  "addWorkFlow": "新建工作流",
  "roi": "roi",
  "report": "报告",

  "/brands.html": "易回眸-品牌管理",


  "/smartReports.html": "易回眸-智能报表",
  "/smartReport.html": "易回眸-智能报表",
  "smartReport": {
    "createReport": "创建智能报表",
    "addReport": "新建智能报表",
    "addContrast": "添加对比报表",
    "configReport": "添加智能报表",
    "sgReport": "智能报表",
    "reportName": "报表名称",
    "reportDsc": "报表描述",
    "bar": "柱状图",
    "line": "折线图",
    "pie": "饼图",
    "setUp": "创建",
    "switchBtn": "切换",
    "chartTypeTxt": "报表类型",
    "typeConfig": "类型配置",
    "switchType": "切换报表类型",
    "addBtn": "新建",
    "delBtn": "删除",
    "editBtn": "编辑",
    "coordNameTxt": "名称",
    "CoordConfigureTxt": "维度配置",
    "customCoordTxt": "自定义维度",
    "ConditionConfig": "条件配置",
    "measureConfig": "度量配置",
    "table": "表",
    "column": "列",
    "columnOperator": "列操作",
    "measureTxt": "度 量",
    "takeTxt": "选中范围",
    "coord1Txt": "维度1",
    "coord2Txt": "维度2",
    "contrast": "对比",
  },


  "sendEmail": {
    "title": "发送邮件任务",
    "sms": "发送短信任务",
    "label1": "任务名称",
    "label2": "活动标题",
    "label3": "邮件主题",
    "labelSms3": "短信主题",
    "labelSmsCon": "短信内容　字数：",
    "labelSmsSign": "短信签名",
    "label4": "发件人名称",
    "label5": "发件人邮箱",
    "label6": "活动品牌",
    "label7": "会员分组",
    "label8": "发送帐号",
    "label9": "发送时间",
  },
  "prompt": "提示",
  "levelSetting": {
    "lvDes": "等级描述",
    "title": "编辑等级",
    "name": "等级名称",
    "addLv": "等级名称",
    "brand": "品牌",
  },
  "ckeitor": {
    "href": "链接",
    "img": "预览图片",
    "skipHref": "跳转链接",
    "ruleCondition": "规则条件",
    "add": "新建",
    "save": "保存",
    "des": "剔除满足以上规则且匹配本规则条件的人数",
    "content": "个性化内容",
    "group": "预览分组",
    "defCon": "默认个性化内容",
    "nonRuleCount": "不符合所有规则条件的会员数",
    "extendHref": "扩展链接",
    "defSkipHref": "默认跳转链接",
    "addRule": "新建新规则",
    "condition": "请选择与个性化图片规格相符的图片",
    "title": "个性化方案中心",
    "label": "个性化设置中心",
    "cancelPer": "取消个性化",
    "insert": "插入变量",
  },
  "pwd": {
    "mod": "修改密码",
    "old": "旧密码",
    "new": "新密码",
    "repeat": "重复新密码",
    "match": "两次密码输入不一致，请重新输入！",
  },
  "chartInfo": {
    "person": "人群划分:",
    "date": ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    "memberType1": "优质会员:",
    "memberType2": "忠诚会员:",
    "memberType3": "普通会员:",
    "memberType4": "不满会员:",
    "total": "总量:",
    "colName1": "活动名称:",
    "colName2": "营销客人数:",
    "colName3": "营销成功客人数:",
    "colName4": "成功率:",
    "colName5": "营销成本:",
    "colName6": "营销收益:",
    "colName7": "ROI:",
  },
  "modal": {
    "title": "信息内容",
    "submitBtn": "确定",
    "cancelBtn": "关闭",
    "smsPersonality": "个性化",
    "cancelSmsPersonality": "取消个性化",
    "wait": "等待",
    "day": "天",
    "hourLater": "小时后",
    "dayLater": "天后",
    "hour": "时",
    "end": "为止",
    "timeBucket": "等待时间段(请选择一天内的时间段)",
    "curDay": "只在当天",
    "exe": "执行",
    "err": "错误",
    "errMsg": "取得数据失败，请联系管理员！",
    "noNull": "不能为空",
    "pwd": "密码的长度不得少于8位",
    "num": "请输入合法的数字",
    "email": "邮箱格式不合法",
    "prompt": "提示:如果不设置等待时间,工作流运行时将默认跳过等待时间节点",
  },
  "workFlow": {
    "base": {
      "text": "人群定位",
      "ports": "进入工作流",
      "sel": "选择分组",
      "new": "新建",
      "addGroup": "新建智能分组",
      "name": "名称",
      "add": "新建",
      "close": "关闭",
    },
    "select": {
      "selGroup": "选择要运行的分组",
      "smartGroup": "智能分组",
      "importGroup": "导入分组",
    },
    "end": "结束",
    "jump": "跳转",
    "event": {
      "emit": "事件触发",
      "memberRegister": "会员注册",
      "memberPhoneChange": "手机变更",
      "memberEmailChange": "邮件变更",
      "memberBirthday": "生日提醒",
      "memberScore": "用户积分",
      "scoreExchange": "积分兑换",
      "memberBehaviour": "浏览行为",
      "memberValidate": "产品验证",
      "memberAttrChange": "属性变更",
      "eventAttrListenTable": "请选择需要监听表：",
      "eventAttrListenColumn": "请选择需要监听列：",
      "memberRegisterTime": "会员注册时间段",
      "controlTime": "设定系统监视时间",
      "prompt": "提示：如果不设置等待时间，工作流运行时将默认跳过等待时间节点",
    },
    "trade": {
      "tradeState": "订单状态",
      "emit": "事件发生",
      "selTradeState": "请选择需要等待的订单状态",
      "orders": "下单",
      "pay": "付款",
      "waitOverTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未打开邮件会员将一直停留在该节点",
    },
    "email": {
      "response": "邮件响应",
      "emit": "事件发生",
      "responseEvent": "邮件响应事件",
      "selEmail": "请选择需要等待的邮件",
      "selEvent": "请选择需要等待的事件",
      "open": "打开邮件",
      "href": "点击链接",
      "waitTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未打开邮件会员将一直停留在该节点",
    },
    "level": {
      "res": "等级变化响应",
      "emit": "事件发生",
      "resTime": "等级变化响应时间段",
      "sysTime": "设定系统监视时间",
      "prompt": "提示：如果不设置等待时间，工作流运行时将默认跳过等待时间节点",
    },
    "marketing": {
      "text": "营销动作",
      "desc": "发送短信",
      "ports": "发送短信",
      "selTem": "选择模板",
      "smsTitle": "短信标题",
      "sendAccount": "发送账号",
      "overTime": "监控回报超时时间点",
    },
    "marketingMail": {
      "send": "发送邮件",
      "sendEmail": "发送邮件",
      "selTem": "选择模板",
      "emailTitle": "邮件标题",
      "sender": "发件人",
      "sendAddress": "发件人地址",
      "sendAccount": "发送账号",
      "overTime": "监控回报超时时间点",
    },
    "wechat": {
      "desc": "微信",
      "info": "微信信息",
      "mobile": "移动端",
      "mobileInfo": "移动端信息",
    },
    "wait": {
      "text": "行为收集",
      "emailOpen": "邮件打开",
      "waitOpen": "等待打开",
      "selEmail": "请选择需要等待的邮件：",
      "overTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未打开邮件会员将一直停留在该节点",
    },
    "waitClick": {
      "desc": "邮件点击",
      "click": "点击",
      "time": "时间到",
      "selEmail": "请选择需要等待的邮件",
      "overTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未点击会员将一直停留在该节点",
    },
    "waitSmsClick": {
      "desc": "短信点击",
      "emailClick": "邮件点击",
      "waitSms": "请选择需要等待的短信",
      "overTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未点击会员将一直停留在该节点",
    },
    "waitTake": {
      "overTime": "设定系统等待超时时间：",
      "take": "收货",
      "time": "时间到",
      "prompt": "提示：如果不设定超时时间，工作流运行时未收货会员将一直停留在该节点",
    },
    "waitOrder": {
      "order": "下单",
      "time": "时间到",
      "overTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未下单会员将一直停留在该节点",
    },
    "waitPay": {
      "pay": "付款",
      "time": "时间到",
      "setOverTime": "请设定超时时间点",
      "overTime": "超时时间点",
    },
    "evaluate": {
      "eva": "评价",
      "time": "时间到",
      "waitEva": "等待评价",
      "setOverTime": "设定系统等待超时时间：",
      "prompt": "提示：如果不设定超时时间，工作流运行时未评价会员将一直停留在该节点",
    },
    "waitCus": {
      "cus": "自定义行为",
      "emit": "定义事件发生",
      "time": "时间到",
      "eventWait": "自定义事件等待",
      "setSysOverTime": "设定系统等待超时时间：",
      "emailClick": "邮件点击：",
      "emailOpen": "邮件打开：",
    },
    "history": {
      "loop": "跳转循环",
      "operate": "高级操作",
      "time": "时间到",
      "setTime": "时间设置",
      "setSysTime": "设定系统等待超时时间",
      "prompt": "提示：如果不设置等待时间，工作流运行时将默认跳过等待时间节点",
    },
    "advancedLevel": {
      "ediMem": "编辑会员属性",
      "selEdit": "选择要修改的属性",
      "ediCon": "修改的内容",
    },
    "groupIn": {
      "addGroup": "加入分组",
      "finish": "完成",
      "selGroup": "选择通过的会员要加入的分组",
    },
    "groupOut": {
      "out": "移出分组",
      "finish": "完成",
      "in": "加入分组",
      "selGroup": "选择通过的会员要移出的分组",
    },
    "ABTest": {
      "AB": "AB测试",
      "A": "A组",
      "B": "B组",
      "ABFlow": "AB测试组分流",
      "scale": "比例",
      "label": "请设置走A分支的概率a%,则走B分支的的概率1-a%",
    },
    "advancedGroupFlow": {
      "memberFlow": "会员分流",
      "selGroup": "请选择要分流分组",
      "groupName": "分组名称",
    },
    "clickSel": "点击选中",
    "cancel": "取消",
    "checkImg": "查看全图",
    "close": "关闭",
    "noOut": "选中节点没有固定出口",
    "selNode": "选中节点有",
    "out": "个出口,从上到下分别是",
  },
  "MemberFilters": [
    {
      name: "会员属性",
      value: "Member",
      buttons: [
        {
          text: "昵称",
          table: 'member',
          column: 'nick',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "标签",
          table: 'member',
          column: 'marker',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "邮箱地址",
          table: 'member',
          column: 'email',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "手机号码",
          table: 'member',
          column: 'mobile',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "所在市/区",
          table: 'member',
          column: 'area_province_city',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [
              {
                type: 'zone',
                name: 'area',
                filter_name: "areas",
                text: "大区",
                url: ""
              },
              {
                type: 'zone',
                name: 'province',
                filter_name: "provinces",
                text: "省市",
                url: ""
              },
              {
                type: 'zone',
                name: 'city',
                filter_name: "towns",
                text: "市区",
                url: ""
              }
            ]
          }
        },
        {
          text: "所属地址",
          table: 'member',
          column: 'address',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "会员等级",
          table: 'member',
          column: 'level_en',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              name: 'levelEn',
              text: "会员等级",
              idName: "key",
              textName: "name",
              //url: SMARTGROUP.getListFixGroupUrl()
              dataCon: [
                {
                  "id": "level_3",
                  "text": "金卡会员"
                },
                {
                  "id": "level_2",
                  "text": "银卡会员"
                },
                {
                  "id": "level_1",
                  "text": "普卡会员"
                }
              ]
            }]
          }
        },
        {
          text: "信息来源",
          table: 'member',
          column: 'input_source',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              type: 'int',
              name: 'input_source',
              text: "信息来源",
              idName: "key",
              textName: "name",
              //url: SMARTGROUP.getListFixGroupUrl()
              dataCon: [
                {
                  "id": "1",
                  "text": "京东"
                },
                {
                  "id": "2",
                  "text": "淘宝"
                },
                {
                  "id": "3",
                  "text": "天猫"
                }
              ]
            }]
          }
        },
        {
          text: "导入分组",
          table: 'group_member',
          column: 'FixGroupKeys',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              name: 'fgKeys',
              text: "分组",
              idName: "key",
              textName: "name",
              url: ""
            }]
          }
        },

        {
          text: "智能分组",
          table: 'smartgroup',
          column: 'SgKeys',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              name: 'sgKeys',
              text: "分组",
              idName: "key",
              textName: "name",
              url: ""
            }]
          }
        },

        {
          text: "生日",
          table: 'member',
          column: 'birthday',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "年龄",
          table: 'member',
          column: 'age',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "积分",
          table: 'member',
          column: 'score',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "注册时间",
          table: 'member',
          column: 'register_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "注册店铺",
          table: 'member',
          column: 'shop_key',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        }
      ]
    },
    {
      name: "订单属性",
      value: "trade",
      buttons: [
        {
          text: "下单时间",
          table: 'trade',
          column: 'created_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "付款时间",
          table: 'trade',
          column: 'pay_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "第一次购买时间",
          table: 'member',
          column: 'first_buy_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "第二次购买时间",
          table: 'member',
          column: 'second_buy_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "第一次购买间隔",
          table: 'member',
          column: 'firstTimeInterval',
          content: {
            type: CONTENT_TYPE.RELATIVE_TIME
          }
        },
        {
          text: "平均购买间隔",
          table: 'member',
          column: 'averageTimeInterval',
          content: {
            type: CONTENT_TYPE.RELATIVE_TIME
          }
        },
        {
          text: "收货地址",
          table: 'trade',
          column: 'receiver_address',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "购买地区",
          table: 'trade',
          column: 'buyer_area',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "购买商品",
          table: 'order',
          column: 'item_key',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "购买商品类型",
          table: 'order',
          column: 'sku_key',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "购买件数",
          table: 'order',
          column: 'num',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "订单状态",
          table: 'trade',
          column: 'status',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              name: 'status',
              text: "订单状态",
              idName: "key",
              textName: "name",
              //url: SMARTGROUP.getListFixGroupUrl()
              dataCon: [
                {
                  "id": "all",
                  "text": "全部"
                },
                {
                  "id": "noPay",
                  "text": "未付款"
                },
                {
                  "id": "pay",
                  "text": "已付款"
                },
                {
                  "id": "waitSend",
                  "text": "等待发货"
                },
                {
                  "id": "tradeSuccess",
                  "text": "交易成功"
                },
                {
                  "id": "overTimeClose",
                  "text": "超时关闭"
                },
                {
                  "id": "refund",
                  "text": "退款"
                }
              ]
            }]
          }
        }
      ]
    },
    {
      name: "RFM属性",
      value: "order",
      buttons: [
        {
          text: "订单总金额",
          table: 'member',
          column: 'total_transaction',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "订单金额",
          table: 'order',
          column: 'payment',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "客单价",
          table: 'member',
          column: 'per_transaction',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "最后购买时间",
          table: 'member',
          column: 'last_buy_time',
          content: {
            type: CONTENT_TYPE.DATE

          }
        },
        {
          text: "购买次数",
          table: 'member',
          column: 'total_trade',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        }
      ]
    },
    {
      name: "营销行为",
      value: "campaign_history",
      buttons: [
        {
          text: "营销方式",
          table: "campaign_log",
          column: 'send_type',
          content: {
            type: CONTENT_TYPE.LIST,
            urls: [{
              name: 'send_type',
              text: "营销方式",
              idName: "key",
              textName: "name",
              dataCon: [
                {
                  "id": "noMarketing",
                  "text": "未营销"
                },
                {
                  "id": "sms",
                  "text": "短信"
                },
                {
                  "id": "email",
                  "text": "邮件"
                }
              ]
            }]
          }
        },
        {
          text: "活动名称",
          table: "campaign_history",
          column: 'campaign_key',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        },
        {
          text: "最后参与活动时间",
          table: 'campaign_history',
          column: 'last_promotion_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "最后参与活动距今天数",
          table: 'campaign_history',
          column: 'lastTimeInterval',
          content: {
            type: CONTENT_TYPE.RELATIVE_TIME
          }
        },
        {
          text: "活动时间",
          table: 'campaign_history',
          column: 'created_time',
          content: {
            type: CONTENT_TYPE.DATE
          }
        },
        {
          text: "营销行为",
          table: 'campaign_log',
          column: 'marketingAction',
          content: {
            type: CONTENT_TYPE.CASCADE
          }
        },
        {
          text: "营销行为频次",
          table: 'campaign_history',
          column: 'status_frequency',
          content: {
            type: CONTENT_TYPE.NUMBER
          }
        },
        {
          text: "月营销行为频次范围",
          table: 'campaign_history',
          column: 'numberRange-campaign',
          content: {
            type: CONTENT_TYPE.NUMBER_RANGE
          }
        },
        {
          text: "点击详情",
          table: 'campaign_history',
          column: 'url',
          content: {
            type: CONTENT_TYPE.INPUT
          }
        }
      ]
    }
  ],
  "importMemberColumns": [
    {name: "会员号", column: "number"},
    {name: "昵称", column: "nick"},
    {name: "邮箱", column: "email"},
    {name: "手机", column: "mobile"},
    {name: "姓名", column: "name"},
    {name: "标签", column: "marker"},
    {name: "性别", column: "gender"},
    {name: "年龄", column: "age"},
    {name: "生日", column: "birthday"},
    {name: "分类", column: "type"},
    {name: "等级", column: "level"},
    {name: "地址", column: "address"},
    {name: "积分", column: "score"}
  ],
  "WorkflowMemberColumns": [
    {text: "会员标签", value: "marker"},
    {text: "会员性别", value: "gender"},
    {text: "会员年龄", value: "age"},
    {text: "会员分类", value: "type"},
    {text: "会员等级", value: "level"},
    {text: "会员地址", value: "address"},
    {text: "会员积分", value: "score"}
  ],
  "importTradeColumns": [
    {name: "订单编号", column: "tid"},
    {name: "交易名称", column: "title"},
    {name: "价格", column: "price"},
    {name: "收货人姓名", column: "receiverName"}
  ],
  "importMenu": {
    boxId: "navMenuBox",
    header: {
      logo: "/img/logo/logo.png",
      companyName: "用户名",
      headerMenu: []
    },
  },
  "subsetMenu": {
    boxId: "navMenuBox",
    header: {
      logo: "/img/logo/logo.png",
      companyName: "用户名",
      headerMenu: []
    },
    content: [
      {
        mainMenu: "常规设置", icon: "fa-gear",
        subMenu: [
          {text: "自定义首页", href: "/customIndex.html", name: "customIndex"}
        ]
      },
      {
        mainMenu: "用户配置", icon: "fa-gear",
        subMenu: [
          {text: "报表配置", href: "/reportCoord.html", name: "reportCoord"},
          {text: "等级配置", href: "/parameterSetting.html", name: "parameterSetting"}
        ]
      },

      {
        mainMenu: "修改密码", icon: "fa-shield", id: "btnChangePassword", href: "#"
      },
      {
        mainMenu: '退出系统<form action="/logout.html" id="logoutForm" method="post"></form>',
        icon: "fa-sign-out",
        id: "btnLogoutForm",
        href: "#"
      }
    ]
  },
};

var TxtContent = txtCn;

smartGroupStatus = {
  expire: 3
};









