import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderingShoppingComponent } from './Components/ordering-shopping/ordering-shopping.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ErrorComponent } from './Components/error/error.component';
import { FinishedorderComponent } from './Components/finishedorder/finishedorder.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewOrdersComponent } from './Components/view-orders/view-orders.component';
import { UpdateOrderComponent } from './Components/update-order/update-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderingShoppingComponent,
    HomeComponent,
    CheckoutComponent,
    ErrorComponent,
    FinishedorderComponent,
    ViewOrdersComponent,
    UpdateOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
