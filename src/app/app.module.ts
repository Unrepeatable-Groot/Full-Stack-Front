import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { AnimationsComponent } from './animations/animations.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { AnimationsPageComponent } from './animations/animations-page/animations-page.component';
import { SerialsPageComponent } from './serials/serials-page/serials-page.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MoviesComponent,
    SerialsComponent,
    AnimationsComponent,
    FooterComponent,
    LogInComponent,
    MoviesPageComponent,
    AnimationsPageComponent,
    SerialsPageComponent,
    MediaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
