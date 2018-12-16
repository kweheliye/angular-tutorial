import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessForSaleComponent } from './business-for-sale.component';

describe('BusinessForSaleComponent', () => {
  let component: BusinessForSaleComponent;
  let fixture: ComponentFixture<BusinessForSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessForSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
