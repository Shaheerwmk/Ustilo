import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  readonly rootUrl = 'http://localhost:49629/';
  constructor(private http: HttpClient) { }

  queryResult() {
    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.get(this.rootUrl + '/api/DataNomads');
  }
}
