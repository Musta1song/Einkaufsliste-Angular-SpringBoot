import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoppinglist } from '../../Shoppinglist';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8080/api/newEntry";


  constructor(private http: HttpClient) { }
  postShoppinglistItem(shoppinglist: Shoppinglist): Observable<Object>{
    {
    return this.http.post<Object>(`${this.baseUrl}`,
      shoppinglist);
    }
  
  }
}
 