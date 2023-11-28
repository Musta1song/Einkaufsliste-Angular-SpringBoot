
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteEntryService {
  private baseUrl = "http://localhost:8080/api/shoppinglist";

  constructor(private http: HttpClient) { }

deleteEntry(id?: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, id);
}

}
