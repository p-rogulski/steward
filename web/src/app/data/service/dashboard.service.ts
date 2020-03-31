import { Injectable } from '@angular/core';
import {FakeApiService} from '../fake-api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api:FakeApiService) { }

  public getData():Observable<any>{
    return this.api.get('/plugins');
  }

}
