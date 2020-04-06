import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-summary-item',
  templateUrl: '<div class="col-xs-12 summary">' +
    '  <div class="col-xs-12 title-item">{{title}}</div>' +
    '  <div class="col-xs-12 description-item">{{description}}</div>' +
    '</div>',
  styleUrls: ['./shop-summary-item.component.scss']
})
export class ShopSummaryItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
