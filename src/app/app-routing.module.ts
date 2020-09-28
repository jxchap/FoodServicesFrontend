import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderingShoppingComponent } from './Components/ordering-shopping/ordering-shopping.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ErrorComponent } from './Components/error/error.component';
import { FinishedorderComponent } from './Components/finishedorder/finishedorder.component';
import { ViewOrdersComponent } from './Components/view-orders/view-orders.component';
import { UpdateOrderComponent } from './Components/update-order/update-order.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ordering-shopping', component: OrderingShoppingComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'order-finished', component: FinishedorderComponent},
  { path: 'view-orders', component: ViewOrdersComponent},
  { path: 'update-order/:id', component: UpdateOrderComponent},  
  { path: '**', component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
