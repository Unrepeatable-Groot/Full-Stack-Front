import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationsHttpService } from '../shared/http.service';

@Component({
  selector: 'app-animations-page',
  templateUrl: './animations-page.component.html',
  styleUrls: ['./animations-page.component.scss']
})
export class AnimationsPageComponent implements OnInit {

  allAnimations: any[] = [];
  animationsOnPage: any[] = [];

  currentPage = 1;
  itemsPerPage = 20; 
  totalPages = 1;

  constructor(
    private animationsService: AnimationsHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animationsService.getAllAnimations().subscribe(data => {
      this.allAnimations = data;
      this.totalPages = Math.ceil(this.allAnimations.length / this.itemsPerPage);

      this.route.params.subscribe(params => {
        this.currentPage = +params['page'] || 1;
        this.updateAnimations();
      });
    });
  }

  updateAnimations() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.animationsOnPage = this.allAnimations.slice(start, end);
  }

  encodeName(name: string): string {
    return encodeURIComponent(name);
  }
}
