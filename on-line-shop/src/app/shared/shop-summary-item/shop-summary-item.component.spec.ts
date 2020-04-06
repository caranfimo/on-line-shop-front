import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSummaryItemComponent } from './shop-summary-item.component';

describe('ShopSummaryItemComponent', () => {
  let component: ShopSummaryItemComponent;
  let fixture: ComponentFixture<ShopSummaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSummaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
