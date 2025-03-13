import { Component } from '@angular/core';

@Component({
  selector: 'app-cricle',
  templateUrl: './cricle.component.html',
  styleUrls: ['./cricle.component.css']
})
export class CricleComponent {

num:number=0;
areas:number=0;
perimeters:number=0;

Area(){
  this.areas=(3.14*(this.num**2));
  console.log(this.areas);
}

Perimeter(){
  this.perimeters=(2*3.14*this.num);
  console.log(this.perimeters);
}

}
