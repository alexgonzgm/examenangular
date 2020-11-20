import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from 'src/Global';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private _http : HttpClient) {
    
   }
  getSeries():Observable<any>{
    var request = "/api/Series";
    return this._http.get(Global.urlSeries + request);
  }

  getSerie(id) : Observable<any>{

    var request = "/api/Series" + id;
    return this._http.get(Global.urlSeries+request);
  }
}
