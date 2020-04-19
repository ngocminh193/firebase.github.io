import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './backend/admin/admin.component';
import { HomeComponent } from './cliend/home/home.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ShopComponent } from './cliend/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    ProductManagerComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
