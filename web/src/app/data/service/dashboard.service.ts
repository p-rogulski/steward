import { Injectable } from '@angular/core';
import {FakeApiService} from '../fake-api/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api:FakeApiService) { }

  getPlugins():Observable<any>{
    return this.api.get('/plugins');
  }

  getPluginDetails(id:number):Observable<any>{
    return this.api.get(`/plugin/${id}`);
  }

}
