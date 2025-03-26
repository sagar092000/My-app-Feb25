import { Component } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {

  count:number=0;
  constructor(private _commanService:CommanService){}
 
  send(){
    console.log(this.count);
    this._commanService.countSub.next(this.count);
  }
}
