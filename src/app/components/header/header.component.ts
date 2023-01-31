import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenuPizza: boolean = true;
  toggleCartOpen: boolean = false;
  total: number = 0


  ngOnInit(): void {

    window.location.pathname == '/pizzas' ? this.toggleMenuPizza = false : ""

  }

  toggleMenu() {
    this.toggleMenuPizza = !this.toggleMenuPizza;
  }

  cartToggle() {
    this.toggleCartOpen = !this.toggleCartOpen

  }
}
