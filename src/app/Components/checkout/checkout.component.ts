import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../service/checkout.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { OutGoingFoodOrder } from '../../classes/food-order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  newFoodOrder = new OutGoingFoodOrder(null, null, null, null,
    null, null, null, null, null, null);

  date = new Date();


  constructor(private checkoutService: CheckoutService,
    private router: Router,
    private dataServicer: DataService) {
  }

  ngOnInit() {
    this.date.setDate(this.date.getDate() + 3);
  }

  deleteCartItem(id) {
    this.checkoutService.cart = this.checkoutService.cart.filter(item => item.id !== id);
  }

  sendSMSValidation() {
    this.dataServicer.sendSMSValidationKey(this.newFoodOrder).subscribe(
      response => console.log(response)
    )
  }

  sendNewOrder() {
    this.newFoodOrder.orderListItems = this.finalizeCart()
    this.dataServicer.createFoodOrder(this.newFoodOrder).subscribe(
      response => {console.log(response)
          this.checkoutService.cart = []
          this.router.navigate(['order-finished'])
      }
    )

  }

  finalizeCart() {
    let finalCartArray: any[] = []
    this.checkoutService.cart.forEach(element => {
      finalCartArray.push(element.description)

    })
    return finalCartArray
  }


}




