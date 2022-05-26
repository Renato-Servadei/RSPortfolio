import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  //url : string = "localhost/8080/api/"
  constructor(private http:HttpClient) { }

  getData(): Observable<any> {

    return this.http.get('./assets/data.json')//(this.url + 'Persona');

  }
}
