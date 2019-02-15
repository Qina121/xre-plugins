import {Injectable} from '@angular/core';

export  enum TemplateType {
  Email,
  Sms,
  Wechat,
  Default
}

@Injectable()
export class DynamicTemplateBuilder {
  static prepareTemplate(key: string, tmpl: string, tempType: TemplateType) {
    const content = '';
    switch (tempType) {
      case TemplateType.Email:
        break;
    }
    const template = `<div id="${key}" ${content}>` + tmpl;
    return template + '</div>';
  }
}
