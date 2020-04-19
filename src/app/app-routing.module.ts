import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './cliend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ShopComponent } from './cliend/shop/shop.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'admin', component: AdminComponent,
children: [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component:DashboardComponent},
  {path: 'product', component:ProductManagerComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
