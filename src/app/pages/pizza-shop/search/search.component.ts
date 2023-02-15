import { SearchServiceService } from 'src/app/services/search-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {

  searchData: string = ''

  constructor(public svc: SearchServiceService) { }

  ngOnInit(): void {
    document.getElementById("myInput")?.addEventListener('input', () => { this.svc.sData$.next(this.searchData) })

  }

  onPressSearch() {

  }

  clearBtn(): void {
    this.searchData = ''
    this.svc.sData$.next('')
  }

}
