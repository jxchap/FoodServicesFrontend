import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedorderComponent } from './finishedorder.component';

describe('FinishedorderComponent', () => {
  let component: FinishedorderComponent;
  let fixture: ComponentFixture<FinishedorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
