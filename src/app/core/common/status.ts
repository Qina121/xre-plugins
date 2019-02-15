/**
 * Created by HZL on 2017/6/9.
 */
export const Status = {
  VERIFYFAIL: {code: -2, name: '审核失败'},
  FAIL: {code: -1, name: '执行失败'},
  CREATE: {code: 0, name: '创建'},
  EDIT: {code: 1, name: '编辑'},
  VERIFY: {code: 2, name: '审核'},
  WAIT: {code: 4, name: '等待执行'},
  START: {code: 5, name: '开始执行'},
  RUNNING: {code: 6, name: '正在执行'},
  PAUSE: {code: 7, name: '暂停'},
  PAUSING: {code: 8, name: '暂停中'},
  STOP: {code: 10, name: '停止'},
  SUCCESS: {code: 11, name: '成功'},
  EDITING: {code: -3, name: '待编辑'},
  COMBINE: {code: 100, name: '联合状态'},
  SUCCESSCOMBINE: {code: 101, name: '成功'},
};
