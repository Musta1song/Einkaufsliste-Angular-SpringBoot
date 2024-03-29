import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private baseUrl = "http://localhost:8080/api/shoppinglist/patch";

  constructor(private http: HttpClient) { }

  SetEntryToIsDone(id: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, id);
}
}
