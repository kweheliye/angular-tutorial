import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedBusinessesComponent } from './home/featured-businesses/featured-businesses.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { PopularCategoriesComponent } from './home/popular-categories/popular-categories.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HowComponent } from './how/how.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BusinessForSaleComponent } from './blog/business-for-sale/business-for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedBusinessesComponent,
    BasicSearchComponent,
    PopularCategoriesComponent,
    HowComponent,
    PricingComponent,
    ContactComponent,
    HomeComponent,
    BlogComponent,
    BusinessForSaleComponent
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
