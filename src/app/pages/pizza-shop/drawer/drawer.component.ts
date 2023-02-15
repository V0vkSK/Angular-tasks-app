import { SearchServiceService } from 'src/app/services/search-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  cartItems: any = [];
  total: any
  @Input() isCartOpen: boolean = false;
  @Output() closeCart = new EventEmitter

  constructor(public svc: SearchServiceService) { }

  ngOnInit(): void {
    // this.cartItems = axios.get('https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart')

    this.svc.sCart$.subscribe(res => this.cartItems = res)
    this.svc.sTotal$.subscribe(res => this.total = res)
  }


  onPressCloseCart(): void {
    this.closeCart.emit()
  }
  removePizzaFromCart(item: any) {
    if (item.qty > 1) {
      this.cartItems.qty--
      item.qty--
      this.total = this.total - item.qty * item.price
      this.svc.sTotal$.next(this.total)
      axios.put(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${item.id}`,
        {
          ...item,
          qty: item.qty,
        })
    } else {
      this.total = this.total - item.price
      this.svc.sTotal$.next(this.total)
      const index = this.cartItems.findIndex((el: { name: any; }) => el.name == item.name)
      this.cartItems.splice(index, 1)
      console.log(index);
      axios.delete(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${item.id}`)
    }
  }


}
