import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularFinalProject';

  serverReady = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkServer();
  }

  checkServer() {
    this.http.get(`https://full-stack-back-a5er.onrender.com/health`)
      .subscribe({
        next: () => {
          this.serverReady = true;
        },
        error: () => {
          // retry every 5 seconds
          setTimeout(() => this.checkServer(), 5000);
        }
      });
  }
}
