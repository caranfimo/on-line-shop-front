import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-product-img',
  templateUrl: './shop-product-img.component.html',
  styleUrls: ['./shop-product-img.component.scss']
})
export class ShopProductImgComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
