import { Component } from '@angular/core';
import { OutGoingFoodOrder } from './classes/food-order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodServiceApp';

  foodOrderModel = new OutGoingFoodOrder(null, null, null, null,
    null,null,null, null, null, null);
  
}

