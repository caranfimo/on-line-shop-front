import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-button',
  templateUrl: '<div class="col-xs-12 shared-shop-button">' +
    '{{description}} </div>',
  styleUrls: ['./shop-button.component.scss']
})
export class ShopButtonComponent implements OnInit {

  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
