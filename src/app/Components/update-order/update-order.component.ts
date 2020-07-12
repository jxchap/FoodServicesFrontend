import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { IncomingFoodOrder } from '../../classes/food-order';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

singleFoodOrder : IncomingFoodOrder = new IncomingFoodOrder(0,'','',0,'','','',0,new Date(),'',false)
databaseID: number;
date = new Date();


  constructor(private dataServicer: DataService,
    private router: Router,
    private route: ActivatedRoute,) { }

    
  ngOnInit() {

    this.date.setDate(this.date.getDate() + 3);
    this.databaseID = this.route.snapshot.params['id'];
     this.dataServicer.retrieveSingleFoodOrder(this.databaseID).subscribe(
       response => this.singleFoodOrder = response)

       
  }

updateOrder(databaseID){
  this.dataServicer.updateFoodOrder(this.singleFoodOrder, this.databaseID).subscribe(
    response => console.log(response))

    this.go_next()
}

  deleteOrder(databaseID){
    this.dataServicer.deleteFoodOrder(this.databaseID).subscribe(
      response => console.log(response))

      this.go_next()
  }

  go_next(){
    setTimeout(() => {
        this.router.navigate(['view-orders'])
      }
      , 1000);
}
  

}
