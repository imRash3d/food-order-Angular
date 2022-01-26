import { Component, OnInit } from '@angular/core';
import { RestaurantArea } from '../../types/types.model';
import { HomeService } from '../../services/home.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  text;
  arealist:RestaurantArea[]=[];
 filterArea:RestaurantArea[]=[];
  constructor(
      private router:Router,
    private service:HomeService
  ) { }

  ngOnInit() {
 
    this.service.getArea().then(res=>{
      this.arealist = res.data;
    }).catch(err=>console.log(err))
  }

  search(e){
    console.log(e, this.arealist)
     this.text =String(e.target.value).toLowerCase();
    this.filterArea= this.arealist.filter(item=>{
     if(item.name.toLowerCase().indexOf(this.text)>-1)
     {
      return 1
     }
  
   })

  }

  selectArea(id){
    this.router.navigate(['restaurants'],{queryParams:{search:id}})
  }
  ngOnDestroy(){
  //  this.subscription.unsubscribe()
  }


}
