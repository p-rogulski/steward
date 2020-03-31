
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './data';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  get(url: string): Observable<any> {
    switch (url) {
      case '/plugins':
        return of(data.plugins);
      default: 
        break;
    }
  }
}