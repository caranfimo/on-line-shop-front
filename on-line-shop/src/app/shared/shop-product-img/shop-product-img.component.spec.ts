import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductImgComponent } from './shop-product-img.component';

describe('ShopProductImgComponent', () => {
  let component: ShopProductImgComponent;
  let fixture: ComponentFixture<ShopProductImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
