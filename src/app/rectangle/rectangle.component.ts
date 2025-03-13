import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  num1:number=0;
  num2:number=0;
  areas:number=0;
  perimeters:number=0;

  Area(){
    this.areas=(this.num1*this.num2);
      console.log(this.areas);
  }
  Perimeter(){
    this.perimeters=(2*(this.num1+this.num2));
    console.log(this.perimeters);
  }
}
