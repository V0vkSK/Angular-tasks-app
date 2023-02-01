
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  searchData: string = '';
  pizzas: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://6387a9cfd9b24b1be3f6e05d.mockapi.io/pizza').subscribe(res => this.pizzas = res)

  }



}
