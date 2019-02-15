import {Component, OnInit} from '@angular/core';
import {PanelBase} from '../../core/model/panelbase.model';
import {LoadingService} from '../../core/service/loading.service';
import {Subscription} from 'rxjs/Subscription';
import {ElementEventService} from '../../core/service/element-event.service';

@Component({
  selector: 'xma-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})

export class LoadingComponent extends PanelBase implements OnInit {
  private subjectService: LoadingService;
  private subscription: Subscription;

  constructor() {
    super();
    this.viewShow = false;
    this.subjectService = LoadingService.getInstance();
    this.subscription = this.subjectService.observableBoolean.subscribe(shown => {
      this.viewShow = shown;
    });
  }

  ngOnInit(): void {
  }

  onDblClick(e: any) {
    ElementEventService.stopBubble(e);
    this.hide();
    return false;
  }
}
