import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) {}

  searchMedia(query: string) {
    return this.http.get<any[]>(`${this.apiUrl}/search?q=${query}`);
  }
}