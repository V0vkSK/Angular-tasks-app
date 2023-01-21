import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent {
  @Input() pizzas: any;
}
