import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { HowComponent } from './how/how.component'
import { PricingComponent } from './pricing/pricing.component'
import { ContactComponent } from './contact/contact.component'
import { BlogComponent } from './blog/blog.component'
import { BusinessForSaleComponent } from './blog/business-for-sale/business-for-sale.component'

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'how', component: HowComponent },
	{ path: 'pricing', component: PricingComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'blog', component: BlogComponent, children: [
    { path: 'blog-business-for-sale', component: BusinessForSaleComponent}
    ]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
