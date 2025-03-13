import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
num1:number=0;
num2:number=0;
bim:number=0;

Bim(){
  this.bim=(this.num1/(this.num2**2));
  console.log(this.bim);
}
}
