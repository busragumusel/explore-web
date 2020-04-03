import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly url = 'http://localhost:8000';

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.url}/categories`);
  }

  getLocations(name): Observable<any> {
    return this.http.get<any>(`${this.url}/categories/${name}/locations`);
  }
}
