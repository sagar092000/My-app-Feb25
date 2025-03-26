import { Component } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  count:number=0;
  constructor( private _commanService:CommanService){
    _commanService.countSub.subscribe(
      (data:any)=>{
        this.count=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
 

  
}
