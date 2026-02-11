import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  movies: any[] = [];
  serials: any[] = [];
  animations: any[] = [];
  funnyMovies: any[] = [];

  private classes = ['A', 'B', 'C', 'D', 'E', 'F'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRandomMovies();
    this.loadRandomSerials();
    this.loadRandomAnimations();
    this.loadRandomFunny();
  }

  private getRandomSix(data: any[]) {
    return [...data]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .map((item, index) => ({
        ...item,
        class: this.classes[index]
      }));
  }

  loadRandomMovies() {
    this.http.get<any[]>('https://full-stack-back-a5er.onrender.com/api/movies')
      .subscribe(data => {
        this.movies = this.getRandomSix(data).map(item => ({
          ...item,
          type: 'movies'
        }));
      });
  }

  loadRandomSerials() {
    this.http.get<any[]>('https://full-stack-back-a5er.onrender.com/api/serials')
      .subscribe(data => {
        this.serials = this.getRandomSix(data).map(item => ({
          ...item,
          type: 'serials'
        }));
      });
  }

  loadRandomAnimations() {
    this.http.get<any[]>('https://full-stack-back-a5er.onrender.com/api/animations')
      .subscribe(data => {
        this.animations = this.getRandomSix(data).map(item => ({
          ...item,
          type: 'animations'
        }));
      });
  }

  loadRandomFunny() {
    this.http.get<any[]>('https://full-stack-back-a5er.onrender.com/api/animations')
      .subscribe(data => {
        this.funnyMovies = this.getRandomSix(data).map(item => ({
          ...item,
          type: 'animations'
        }));
      });
    }

  popularMovies = [
    { "movieImage": "https://cdn.marvel.com/content/2x/avengersinfinitywar_lob_mas_hlf_01_3.jpg", "class": "A", "name": "AVENGERS: INFINITY WAR "},
    { "movieImage": "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2025/09/avatar-3.jpg", "class": "B", "name": "Avatar: Fire and Ash"},
    { "movieImage": "https://cdn.marvel.com/content/2x/avengersendgame_lob_mas_mob_01.jpg", "class": "C", "name": "Avengers: Endgame"}
  ];
  popularSeries = [
    { "movieImage": "https://i.pinimg.com/736x/27/7e/b1/277eb1d795931a400e9f31956d3d788b.jpg", "class": "A", "name": "Game of Thrones"},
    { "movieImage": "https://i.redd.it/bdcfkro5ytf61.jpg", "class": "B", "name": "Breaking Bad"},
    { "movieImage": "https://www.cancelledscifi.com/wp-content/uploads/2021/05/loki-disney-plus-banner.jpg", "class": "C", "name": "Loki"}
  ];
}