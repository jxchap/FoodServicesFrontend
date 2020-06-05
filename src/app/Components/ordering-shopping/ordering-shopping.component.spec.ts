import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingShoppingComponent } from './ordering-shopping.component';

describe('OrderingShoppingComponent', () => {
  let component: OrderingShoppingComponent;
  let fixture: ComponentFixture<OrderingShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderingShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
