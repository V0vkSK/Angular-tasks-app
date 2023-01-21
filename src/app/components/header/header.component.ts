import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenuPizza: boolean = true;

  ngOnInit(): void {

    window.location.pathname == '/pizzas' ? this.toggleMenuPizza = false : ""

  }

  toggleMenu() {
    this.toggleMenuPizza = !this.toggleMenuPizza;
  }
}
