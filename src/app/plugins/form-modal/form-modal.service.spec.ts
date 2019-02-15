/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormModalService } from './form-modal.service';

describe('Service: FormModal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormModalService]
    });
  });

  it('should ...', inject([FormModalService], (service: FormModalService) => {
    expect(service).toBeTruthy();
  }));
});
