import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// model
import { ProductListModel } from './model/product';

//pages
import { navbarheader } from './pages/nav/nav.page';
import { MyCartPage } from './pages/mycart/mycart.page';
import { ProductListpage } from './pages/products/products.page';
import { BillingListpage } from './pages/billing/billing.page';
import { PaymentListpage } from './pages/payment/payment.page';

//Services
import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: 'mycart', component:MyCartPage},
  { path: 'products/products', component: ProductListpage },
  { path: 'billing/billing', component: BillingListpage },
  { path: 'payment/payment', component: PaymentListpage },
  { path: '',
    redirectTo: '/products/products',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot( appRoutes,
      { enableTracing: false, useHash:false} // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, ProductListpage, navbarheader, BillingListpage, PaymentListpage ],
  providers: [ProductListModel,StorageService,CartService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
