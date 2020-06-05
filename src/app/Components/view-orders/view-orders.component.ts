import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(private dataServicer: DataService,
    private router: Router ) { }

  foodOrderArray: any[]

  ngOnInit() {
    this.refreshOrders()
  }

  changeOrder(id){
    this.router.navigate(['update-order', id])
  }

  refreshOrders(){
    this.dataServicer.retrieveAllFoodOrders().subscribe(
      response => this.foodOrderArray = response)
  }




}
