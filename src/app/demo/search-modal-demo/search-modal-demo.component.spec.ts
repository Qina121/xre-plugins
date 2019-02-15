import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModalDemoComponent } from './search-modal-demo.component';

describe('SearchModalDemoComponent', () => {
  let component: SearchModalDemoComponent;
  let fixture: ComponentFixture<SearchModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
