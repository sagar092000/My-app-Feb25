import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlipkartApiService } from '../flipkart-api.service';

@Component({
  selector: 'app-flipkart-api',
  templateUrl: './flipkart-api.component.html',
  styleUrls: ['./flipkart-api.component.css']
})
export class FlipkartApiComponent {

  flipkartdata:any=[]

  constructor(private _flipkartapiservices:FlipkartApiService){
    _flipkartapiservices.getFlipkart().subscribe(
     
      (data:any)=>{
        console.log(data);
        this.flipkartdata=data;
        console.log(this.flipkartdata);
      },(err:any)=>
      { alert("internal server error!")}
    )

  }
}
