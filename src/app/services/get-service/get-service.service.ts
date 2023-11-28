
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoppinglist } from '../../Shoppinglist';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private baseUrl = "http://localhost:8080/api/shoppinglist";


  constructor(private http: HttpClient) { }

  getShoppinglist(): Observable<Shoppinglist[]>{
    return this.http.get<Shoppinglist[]>(`${this.baseUrl}`);

  }
}
 