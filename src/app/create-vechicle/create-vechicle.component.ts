import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vechicle',
  templateUrl: './create-vechicle.component.html',
  styleUrls: ['./create-vechicle.component.css']
})
export class CreateVechicleComponent {
public vechileForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  color: new FormControl(),
  cost: new FormControl(),
  fuel: new FormControl(),
})

constructor(private service:VehicleService, private _router:Router){}

create(){
  console.log(this.vechileForm.value);
  this.service.createVechile(this.vechileForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New Vechile Created Sucessfully...!");
      this._router.navigateByUrl("/dashboard/vechiles");
    },(err:any)=>{
      alert("Internal Server Error...!")
    }
  )
}
}
