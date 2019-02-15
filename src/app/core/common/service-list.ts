/**
 * 服务列表
 */
export class ServiceList {
  static WELL_EMAIL = 'https://src.xrewin.com/api/v1';
  static WORKFLOW = 'https://src.xrewin.com/api/v1';
  static SMART_GROUP = 'https://src.xrewin.com/api/v1';
  static INDIVIDUATION = 'https://src.xrewin.com/api/v1';
  static PLATFORM = 'https://src.xrewin.com/api/v1';
  static TRANSFER = 'https://src.xrewin.com/api/v1';
  static TRANSFER_MAP = 'https://src.xrewin.com/api/v1';
  static SMART_REPORT = 'https://src.xrewin.com/api/v1';
  static RIGHT = 'https://src.xrewin.com/api/v1';
  static DATA_IMPORT = 'https://src.xrewin.com/api/v1';
  static OPEN_API = 'https://src.xrewin.com/open/v1';
  static IntelligentChart = 'https://src.xrewin.com/open/v1';
  static INTELLIGENT_CHART = 'https://src.xrewin.com/open/v1';

  // static WELL_EMAIL = 'http://10.0.0.22:8080/api/v1';
  // static WORKFLOW = 'http://10.0.0.22:8080/api/v1';
  // static SMART_GROUP = 'http://10.0.0.22:8080/api/v1';
  // static INDIVIDUATION = 'http://10.0.0.22:8080/api/v1';
  // static PLATFORM = 'http://10.0.0.22:8080/api/v1';
  // static TRANSFER = 'http://10.0.0.22:8080/api/v1';
  // static TRANSFER_MAP = 'http://10.0.0.22:8080/api/v1';
  // static SMART_REPORT = 'http://10.0.0.22:8080/api/v1';
  // static RIGHT = 'http://10.0.0.22:8080/api/v1';
  // static DATA_IMPORT = 'http://10.0.0.22:8080/api/v1';
  // static OPEN_API = 'http://10.0.0.22:8080/open/v1';

  /**
   * 刷新的服务列表
   * @param options
   */
  static refreshServices(options: {
    WELLEMAIL?: string,
    WORKFLOW?: string,
    SMARTGROUP?: string,
    PERSONALIZE?: string,
    PLATFORM?: string,
    TRANSFER?: string,
    TRANSFERMAP?: string,
    SMARTREPORT?: string,
    RIGHT?: string,
    DATA_IMPORT?: string,
    OPEN_API?: string,
    INTELLIGENT_CHART?: string
  } = {}) {
    ServiceList.WELL_EMAIL = options.WELLEMAIL || ServiceList.WELL_EMAIL;
    ServiceList.WORKFLOW = options.WORKFLOW || ServiceList.WORKFLOW;
    ServiceList.SMART_GROUP = options.SMARTGROUP || ServiceList.SMART_GROUP;
    ServiceList.INDIVIDUATION = options.PERSONALIZE || ServiceList.INDIVIDUATION;
    ServiceList.PLATFORM = options.PLATFORM || ServiceList.PLATFORM;
    ServiceList.TRANSFER = options.TRANSFER || ServiceList.TRANSFER;
    ServiceList.TRANSFER_MAP = options.TRANSFERMAP || ServiceList.TRANSFER_MAP;
    ServiceList.SMART_REPORT = options.SMARTREPORT || ServiceList.SMART_REPORT;
    ServiceList.RIGHT = options.RIGHT || ServiceList.RIGHT;
    ServiceList.DATA_IMPORT = options.DATA_IMPORT || ServiceList.DATA_IMPORT;
    ServiceList.OPEN_API = options.OPEN_API || ServiceList.OPEN_API;
    ServiceList.INTELLIGENT_CHART = options.INTELLIGENT_CHART || ServiceList.INTELLIGENT_CHART;
  }

  static initLocal() {
    const options = {
      WELLEMAIL: 'http://localhost:8080/api/v1',
      WORKFLOW: 'http://localhost:8080/api/v1',
      SMARTGROUP: 'http://localhost:8080/api/v1',
      PERSONALIZE: 'http://localhost:8080/api/v1',
      PLATFORM: 'http://localhost:8080/api/v1',
      TRANSFER: 'http://localhost:8080/api/v1',
      TRANSFERMAP: 'http://localhost:8080/api/v1',
      SMARTREPORT: 'http://localhost:8080/api/v1',
      RIGHT: 'http://localhost:8080/api/v1',
      DATA_IMPORT: 'http://localhost:8080/api/v1',
      OPEN_API: 'http://localhost:8080/open/v1',
    };
    ServiceList.refreshServices(options);
  }

  static initInternet() {
    const options = {
      WELLEMAIL: 'http://' + window.location.hostname + ':9003',
      WORKFLOW: 'http://' + window.location.hostname + ':9116',
      SMARTGROUP: 'http://' + window.location.hostname + ':9117',
      PERSONALIZE: 'http://' + window.location.hostname + ':9118',
      PLATFORM: 'http://' + window.location.hostname + ':9119',
      TRANSFER: 'http://' + window.location.hostname + ':9120',
      TRANSFERMAP: 'http://' + window.location.hostname + ':9120',
      SMARTREPORT: 'http://' + window.location.hostname + ':9122',
      RIGHT: 'http://' + window.location.hostname + ':9123',
      DATA_IMPORT: 'http://' + window.location.hostname + ':9124',
    };
    ServiceList.refreshServices(options);
  }

  static initSSL() {
    const options = {
      WELLEMAIL: '/api/v1',
      WORKFLOW: '/api/v1',
      SMARTGROUP: '/api/v1',
      PERSONALIZE: '/api/v1',
      PLATFORM: '/api/v1',
      TRANSFER: '/api/v1',
      TRANSFERMAP: '/api/v1',
      SMARTREPORT: '/api/v1',
      RIGHT: '/api/v1',
      DATA_IMPORT: '/api/v1',
      OPEN_API: '/open/v1',
    };
    ServiceList.refreshServices(options);
  }

  static initTest() {
    const url = 'http://' + window.location.hostname + ':8080';
    const options = {
      WELLEMAIL: url + '/api/v1',
      WORKFLOW: url + '/api/v1',
      SMARTGROUP: url + '/api/v1',
      PERSONALIZE: url + '/api/v1',
      PLATFORM: url + '/api/v1',
      TRANSFER: url + '/api/v1',
      TRANSFERMAP: url + '/api/v1',
      SMARTREPORT: url + '/api/v1',
      RIGHT: url + '/api/v1',
      DATA_IMPORT: url + '/api/v1',
      OPEN_API: url + '/open/v1',
    };
    ServiceList.refreshServices(options);
  }
  static initMock() {
    const url = 'http://' + window.location.hostname + ':3000';
    const options = {
      WELLEMAIL: 'https://src.xrewin.com/api/v1',
      WORKFLOW: 'https://src.xrewin.com/api/v1',
      SMARTGROUP: url,
      PERSONALIZE: 'https://src.xrewin.com/api/v1',
      PLATFORM: 'https://src.xrewin.com/api/v1',
      TRANSFER: 'https://src.xrewin.com/api/v1',
      TRANSFERMAP: 'https://src.xrewin.com/api/v1',
      SMARTREPORT: 'https://src.xrewin.com/api/v1',
      RIGHT: 'https://src.xrewin.com/api/v1',
      DATA_IMPORT: 'https://src.xrewin.com/api/v1',
      OPEN_API: 'https://src.xrewin.com/open/v1',
      INTELLIGENT_CHART: url,
    };
    ServiceList.refreshServices(options);
  }
}
