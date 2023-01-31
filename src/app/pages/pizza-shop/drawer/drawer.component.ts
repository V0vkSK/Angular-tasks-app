import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  ngOnInit(): void {

  }

  cartItems: any = [];

  @Input() isCartOpen: boolean = false;
  @Output() closeCart = new EventEmitter

  onPressCloseCart() {
    this.closeCart.emit()
  }

}
