import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {


num1:number=0;
num2:number=0;
result:number=0;

Add(){
  console.log(this.num1,this.num2);
  this.result=(this.num1+this.num2)
  console.log(this.result);
}

Sub(){
  console.log(this.num1,this.num2);
  this.result=(this.num1-this.num2)
  console.log(this.result);
}

Mul(){
  console.log(this.num1,this.num2);
  this.result=(this.num1*this.num2)
  console.log(this.result);
}

Div(){
  console.log(this.num1,this.num2);
  this.result=(this.num1/this.num2)
  console.log(this.result);
}
}
