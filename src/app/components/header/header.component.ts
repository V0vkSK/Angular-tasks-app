
import { SearchServiceService } from 'src/app/services/search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenuPizza: boolean = true;
  toggleCartOpen: boolean = false;
  total: any


  constructor(public svc: SearchServiceService) { }

  ngOnInit(): void {

    window.location.pathname == '/pizzas' ? this.toggleMenuPizza = false : ""

    this.svc.sTotal$.subscribe(res => this.total = res)

  }

  toggleMenu() {
    this.toggleMenuPizza = !this.toggleMenuPizza;
  }

  cartToggle() {
    this.toggleCartOpen = !this.toggleCartOpen

  }
}
