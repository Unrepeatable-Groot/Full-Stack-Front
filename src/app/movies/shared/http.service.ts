import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<any[]>('https://full-stack-back-a5er.onrender.com/api/movies');
  }
} 