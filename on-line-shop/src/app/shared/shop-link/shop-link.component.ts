import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-link',
  templateUrl: './shop-link.component.html',
  styleUrls: ['./shop-link.component.scss']
})
export class ShopLinkComponent implements OnInit {

  @Input() link: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
