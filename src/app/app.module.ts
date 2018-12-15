import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedBusinessesComponent } from './featured-businesses/featured-businesses.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedBusinessesComponent,
    BasicSearchComponent,
    PopularCategoriesComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
