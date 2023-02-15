import { HttpClient } from '@angular/common/http';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { isNgContent } from '@angular/compiler';




@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizzas: any;
  searchData: any = ''
  pizzass: any = ''


  constructor(public svc: SearchServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    setTimeout(() => { this.pizzass = this.pizzas }, 1000)
    this.svc.sData$.subscribe(res => {
      this.searchData = res
      this.pizzass = this.pizzas.filter((el: { name: string | any[]; }) => el.name.toString().toLowerCase().includes(this.searchData.toLowerCase()))

    })

  }

  onPressPlus(item: any) {
    console.log(item);
    let arr
    if (this.svc.sCart$.subscribe(res => {
      arr = res;
      console.log(arr);
      // arr.find(el => el.name === item.name)
    })) {
      item.qty++
      console.log(item);
      axios.put(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${item.id}`,
        {
          ...item,
          qty: item.qty
        })
    } else {
      this.svc.sCart$.next(item)
      // console.log(this.svc.sCart$.subscribe(res => console.log(res)));
      axios.post('https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart', item)
    }
  }

}
