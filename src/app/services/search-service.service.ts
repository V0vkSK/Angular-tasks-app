
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  public sData$ = new Subject()
  public sTotal$ = new Subject()
  public sCart$ = new Subject()

}





