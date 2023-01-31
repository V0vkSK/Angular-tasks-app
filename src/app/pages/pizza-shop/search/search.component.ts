import { observable, Observable, Subject } from 'rxjs';
import { Component, Output } from '@angular/core';

const search = new Observable()

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent {

  searchData: string = ''
  s: string = ''

  clearBtn(): void {
    newFunction().s = search.next(this.searchData)
    console.log(this.s);
    this.searchData = ''

    function newFunction() {
      return this;
    }
  }

}
