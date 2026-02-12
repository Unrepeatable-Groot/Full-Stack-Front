import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://full-stack-back-a5er.onrender.com/api';

  constructor(private http: HttpClient) {}

  searchMedia(query: string) {
    return this.http.get<any[]>(`${this.apiUrl}/search?q=${query}`);
  }
}