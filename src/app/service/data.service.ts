import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app.constants';
import { IncomingFoodOrder } from '../classes/food-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }


  retrieveSingleFoodOrder(databaseID) {
    return this.http.get<IncomingFoodOrder>(`${API_URL}/orders/${databaseID}`);
  }

  retrieveAllFoodOrders(): Observable<IncomingFoodOrder[]> {
    return this.http.get<IncomingFoodOrder[]>(`${API_URL}/orders`);
  }

  createFoodOrder(foodOrder) {
    return this.http.post(`${API_URL}/order-finished`, foodOrder)
  }

  updateFoodOrder(foodOrderObject, databaseID) {
    return this.http.put(`${API_URL}/update-order/${databaseID}`, foodOrderObject);
  }

  deleteFoodOrder(databaseID) {
    return this.http.delete(`${API_URL}/deleteorders/${databaseID}`);
  }

  sendSMSValidationKey(foodOrder){
    return this.http.post(`${API_URL}/createTempSMSValidationKey`, foodOrder)
  }

}
