import {Component, OnInit} from '@angular/core';
import {HomePageService} from './home-page-service';
import {PlatformDao} from '../../../core/dao/platform.dao';
import {Status} from '../../../core/common/status';
import {NavigationExtras, Router} from '@angular/router';
// import {LoadingService} from '../../core/service/loading.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HomePageService]
})
export class HomePageComponent implements OnInit {

  toEdit = 0;
  toPerform = 0;
  completed = 0;
  CampaignIndexObj = {
    mt: 'mail',
    interval: 'week'
  };
  getOneData = {
    year: 'year',
    quarter: 'quarter',
    month: 'month',
    week: 'week'
  };
  selDuration: any;
  duration = [
    {previous: '上年', current: '本年'},
    {previous: '上季', current: '本季'},
    {previous: '上月', current: '本月'},
    {previous: '上周', current: '本周'},
  ];
  brandIndex: Array<any>;
  marketingIndexes: Array<any>;
  loadBool: boolean;

  isSelMt = [false, true, false];
  isSelOneInterval = [false, false, false, true];
  isSelInterval = [false, false, false, true];

  constructor(private plat: PlatformDao, private router: Router) {
  }

  ngOnInit() {
    // 数据初始化
    this.brandIndex = [
      {'name': '会员总数', 'count': '加载中...'},
      {'name': '总收入', 'count': '加载中...'},
      {'name': '回购率', 'count': '加载中...' + '%'},
      {'name': '回购人数', 'count': '加载中...'},
      {'name': '回购订单数', 'count': '加载中...'},
      {'name': '客单价', 'count': '加载中...'},
    ];
    this.marketingIndexes = [
      {name: '营销收入'},
      {name: '回购率'},
      {name: '回购人数'},
      {name: '订单数'},
      {name: '客单价'},
      {name: 'ROI'}
    ];
    this.getCampaignIndex();
    this.getOneInterval(this.getOneData.week, 3);
  }

  // 获取大体数据
  getOneInterval(interval, index) {
    const that = this;
    // LoadingService.show();
    this.plat.homeDataIndexAction.getHomeDataIndex(interval, function (msg) {
      // LoadingService.hide();
      if (msg.checkSuccess()) {
        that.loadBool = true;
        that.selOneInterval(index);
        that.selDuration = that.duration[index];
        that.brandIndex = [
          {'name': '会员总数', 'count': msg.data[0].brandIndex.memberNumber},
          {'name': '总收入', 'count': msg.data[0].brandIndex.totalIncome},
          {'name': '回购率', 'count': msg.data[0].brandIndex.repurchaseRate + '%'},
          {'name': '回购人数', 'count': msg.data[0].brandIndex.repurchaseNumber},
          {'name': '回购订单数', 'count': msg.data[0].brandIndex.repurchaseTradeNumber},
          {'name': '客单价', 'count': msg.data[0].brandIndex.perTransaction},
        ];
        that.marketingIndexes = [
          msg.data[0].marketingIndexes['营销收入'],
          msg.data[0].marketingIndexes['回购率'],
          msg.data[0].marketingIndexes['回购人数'],
          msg.data[0].marketingIndexes['订单数'],
          msg.data[0].marketingIndexes['客单价'],
          msg.data[0].marketingIndexes['ROI'],
        ];
      }
    });
  }

  // 获取绝对值
  getAbs(num: number) {
    return Math.abs(num);
  }

  selMt(index) {
    const that = this;
    that.isSelMt.forEach((sel, _index) => {
      that.isSelMt[_index] = false;
    });
    that.isSelMt[index] = true;
  }

  selInterval(index) {
    const that = this;
    that.isSelInterval.forEach((sel, _index) => {
      that.isSelInterval[_index] = false;
    });
    that.isSelInterval[index] = true;
  }

  selOneInterval(index) {
    const that = this;
    that.isSelOneInterval.forEach((sel, _index) => {
      that.isSelOneInterval[_index] = false;
    });
    that.isSelOneInterval[index] = true;
  }

  getMt(type, index) {
    this.CampaignIndexObj['mt'] = type;
    this.getCampaignIndex();
    this.selMt(index);
  }

  getInterval(interval, index) {
    this.CampaignIndexObj['interval'] = interval;
    this.getCampaignIndex();
    this.selInterval(index);
  }

  getCampaignIndex() {
    const that = this;
    that.restCampaignIndex();
    // LoadingService.show();
    that.plat.campaignIndex.getCampaignIndex(this.CampaignIndexObj, function (msg) {
      // LoadingService.hide();
      if (msg.checkSuccess()) {
        const arr = msg.data;
        arr.forEach(item => {
          switch (item.status) {
            case Status.EDIT.code:
              that.toEdit = item.count;
              break;
            case Status.COMBINE.code:
              that.toPerform = item.count;
              break;
            case Status.SUCCESSCOMBINE.code:
              that.completed = item.count;
              break;
          }
        });
      }
    });
  }

  restCampaignIndex() {
    this.toEdit = 0;
    this.toPerform = 0;
    this.completed = 0;
  }

  toPage(statusCode) {
    const that = this;
    if (that.isSelMt[0]) {
      that.router.navigate(['/workflow']);
    } else if (that.isSelMt[1]) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          'statusCode': statusCode
        }
      };
      that.router.navigate(['/mail-templates'], navigationExtras);
    } else if (that.isSelMt[2]) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          'statusCode': statusCode
        }
      };
      that.router.navigate(['/sms-templates'], navigationExtras);
    }


  }
}
