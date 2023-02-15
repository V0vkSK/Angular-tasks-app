import { SearchServiceService } from 'src/app/services/search-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  searchData: any = ''
  pizzas: any = [];
  cart: any = 0

  constructor(private http: HttpClient, public svc: SearchServiceService) { }

  ngOnInit(): void {

    this.http.get('https://6387a9cfd9b24b1be3f6e05d.mockapi.io/pizza').subscribe(res => this.pizzas = res)
    this.http.get('https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart').subscribe(res => this.cart = res)

    setTimeout(() => this.svc.sCart$.next(this.cart), 1000)
    setTimeout(() => this.svc.sTotal$.next(this.cart.reduce((acc: number, item: { qty: number; price: number; }) => { return acc + item.qty * item.price }, 0)), 1000)


  }
}
