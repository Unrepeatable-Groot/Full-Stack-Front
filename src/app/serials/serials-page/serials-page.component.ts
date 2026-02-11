import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerialsHttpService } from '../shared/http.service';

@Component({
  selector: 'app-serials-page',
  templateUrl: './serials-page.component.html',
  styleUrls: ['./serials-page.component.scss']
})
export class SerialsPageComponent implements OnInit {

  allSerials: any[] = [];
  serialsOnPage: any[] = [];

  currentPage = 1;
  itemsPerPage = 20;
  totalPages = 1;

  constructor(
    private serialsService: SerialsHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serialsService.getAllSerials().subscribe(data => {
      this.allSerials = data;
      this.totalPages = Math.ceil(this.allSerials.length / this.itemsPerPage);

      this.route.params.subscribe(params => {
        this.currentPage = +params['page'] || 1;
        this.updateSerials();
      });
    });
  }

  updateSerials() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.serialsOnPage = this.allSerials.slice(start, end);
  }

  encodeName(name: string): string {
    return encodeURIComponent(name);
  }
}
