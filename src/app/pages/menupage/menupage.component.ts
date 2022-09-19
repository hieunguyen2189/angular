import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
getmenuID:any;
menuData:any;
  ngOnInit(): void {
  this.getmenuID=this.param.snapshot.paramMap.get('id');
  console.log(this.getmenuID,'getmenuID');
if(this.getmenuID){
  this.menuData=this.service.foodDetails.filter((value)=>{
        return value.ID == this.getmenuID;

  });
  console.log(this.menuData,'menudata>>');
}
  }

}
