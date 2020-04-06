import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import {MatCardModule, MatGridListModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';
import { ShopSummaryItemComponent } from './shared/shop-summary-item/shop-summary-item.component';
import { ShopButtonComponent } from './shared/shop-button/shop-button.component';
import { ShopProductImgComponent } from './shared/shop-product-img/shop-product-img.component';
import { ShopLinkComponent } from './shared/shop-link/shop-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopHomeComponent,
    ShopProductComponent,
    ShopProductListComponent,
    ShopSummaryItemComponent,
    ShopButtonComponent,
    ShopProductImgComponent,
    ShopLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
