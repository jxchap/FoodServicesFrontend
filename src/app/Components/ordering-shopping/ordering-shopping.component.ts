import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../../service/checkout.service';
import { Cart } from 'src/app/classes/cart';



export class PreOrderListItem {
  constructor(public id: number, public description: string) { }
}

@Component({
  selector: 'app-ordering-shopping',
  templateUrl: './ordering-shopping.component.html',
  styleUrls: ['./ordering-shopping.component.css']
})
export class OrderingShoppingComponent implements OnInit {

  constructor(private router: Router,
    private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.foodNameArray = ['CHOCOLATE CHIP COOKIES - (12 ct)',
      'PEANUT BUTTER COOKIES - (12 ct)',
      'BROWNIES - (12 ct)',
      'FRESH SQUEEZED ORANGE JUICE - 1 qt',
      'RASPBERRY LEMON CHEESECAKE - (12 ct)',
      'BANANA BREAD - one loaf',
      'GRANOLA BARS - (12 ct)']
  }

  /* ----------------------------------------------- */
  /* Store Methods and Variables*/
  /* ----------------------------------------------- */

  largeOrderWarning = false;
  foodNumber: number = 0
  foodNameArray: Array<string>
  newPreOrderID: number = 1
  myImgSource = ["assets/images/" + String(this.foodNumber) + ".jpg"]
//food text description variables located at bottom of this file
  foodWindowH2TitleArray = [
    'Chocolate Chip Cookies',
    'Peanut Butter Cookies',
    'Brownies',
    'Fresh Squeezed Orange Juice',
    'Raspberry Lemon Cheesecake',
    'Banana Bread',
    'Granola Bars'
  ]
  foodWindowH2Title = this.foodWindowH2TitleArray[this.foodNumber]


  //store window controls

  previousFood() {
    if (this.foodNumber === 0) this.foodNumber = 6
    else this.foodNumber--
    this.setFood(this.foodNumber)
  }

  nextFood() {
    if (this.foodNumber >= 6) this.foodNumber = 0
    else this.foodNumber++
    this.setFood(this.foodNumber)
  }

  setFood(currentFood) {
    this.foodWindowH2Title = this.foodWindowH2TitleArray[currentFood]
    this.myImgSource = ["assets/images/" + currentFood + ".jpg"]
    this.foodTextDescription = this.foodTextDescriptionArray[currentFood]
  }

  //store order list methods

  deletePreOrderItem(id) {
    this.checkoutService.cart = this.checkoutService.cart.filter(item => item.id !== id);
    if (this.checkoutService.cart.length < 7) {
      this.largeOrderWarning = false;
    }
  }

  sendNewFoodToPreOrderForm() {
    if (this.checkoutService.cart.length >= 7) {
      this.largeOrderWarning = true;
    }
    else {
      this.checkoutService.cart.push(new Cart(this.newPreOrderID, this.foodNameArray[this.foodNumber]))
      this.newPreOrderID++
    }
  }


  //sends order to check component
  goToCheckout() {
    
    this.router.navigate(['checkout'])

  }


  foodTextDescriptionArray = [
    
    "1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "6 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "7 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  ]
  foodTextDescription = this.foodTextDescriptionArray[0]

}



