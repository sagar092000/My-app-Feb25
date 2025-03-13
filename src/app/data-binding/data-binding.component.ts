import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

//Event Binding 

click(){
  alert("HEloooooooooooooo!");
}

submit(){
  alert("Hi.....!");
}

//interpolation 

age:number=24;
name:string='Sagar';

//property binding 

isData:boolean=true; 

// two way data binding 

mobile:string='+91'


num1:number=0;
num2:number=0;
result:number=0;

Add(){
  console.log(this.num1,this.num2);
  this.result=(this.num1+this.num2)
  console.log(this.result);
}

}
