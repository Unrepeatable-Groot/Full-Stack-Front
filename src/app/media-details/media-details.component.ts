import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'] 
})
export class MediaDetailsComponent implements OnInit {

  media: any;
  relatedMedia: any[] = [];

  type!: string;
  name!: string; 

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type')!;
      this.name = params.get('name')!;
      this.loadMedia();
      this.loadRelated();
    });
  }

  private getApiBase(): string {
    switch(this.type) {
      case 'movies': return 'https://full-stack-back-a5er.onrender.com/api/movies';
      case 'animations': return 'https://full-stack-back-a5er.onrender.com/api/animations';
      case 'serials': return 'https://full-stack-back-a5er.onrender.com/api/serials';
      default: return ''; 
    }
  }

  loadMedia(): void {
    const apiUrl = `${this.getApiBase()}/name/${this.name}`;
    this.http.get(apiUrl).subscribe({
      next: data => this.media = data,
      error: err => console.error(err)
    });
  }

  loadRelated(): void {
    this.http.get<any[]>(this.getApiBase()).subscribe({
      next: data => {
        const filtered = data.filter(item => item.name !== this.name);

        this.relatedMedia = filtered
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);
      },
      error: err => console.error(err)
    });
  }

}