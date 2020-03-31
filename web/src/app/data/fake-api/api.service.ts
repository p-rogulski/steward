
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import data from './data';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  get(url: string): Observable<any> {
    if(url.match('^/\plugins$')){
      return of(data.plugins);
    }else if(url.match('^/\plugin/\[0-9]+$')){
      const splited=url.split('/');
      const id=Number(splited[splited.length-1]);
      return of(data.plugins.filter((plugin)=>plugin.id===id)[0]);
    }
  }
}