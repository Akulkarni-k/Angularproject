import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
     /* this.service.foodDetails.filter((value)=>{
        if(value.id==this.getMenuId)
        {
          return value;
        }
      })
*/
      this.menuData=this.service.foodDetails.filter((value)=>{
        return value.id==this.getMenuId;
      });
      console.log(this.menuData,'menudata');
    }
  }

}
