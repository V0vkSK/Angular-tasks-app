import { Component, Output, EventEmitter } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent {

  searchData: string = ''

  clearBtn() {
    this.searchData = ''
  }

}
