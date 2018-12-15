import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {HowComponent} from './how/how.component'
import {PricingComponent} from './pricing/pricing.component'
import {ContactComponent} from './contact/contact.component'


const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomePageComponent},
      { path: 'how', component: HowComponent },
      { path: 'pricing', component: PricingComponent },
       { path: 'contact', component: ContactComponent }

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
