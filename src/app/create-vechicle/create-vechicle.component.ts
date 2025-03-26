import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

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

id:number=0;
vehicleForm:any='';

constructor(private service:VehicleService, private _router:Router,
  private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
     console.log(this.id);
    },(err:any)=>{
      alert("Internal Server Error..!")
    }
  )
  
  if(this.id){
    service.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vechileForm.patchValue(data);
      },(err:any)=>{
        alert('Internal Server Error')
      }
    )
  }
}

create(){
  if(this.id){
    console.log(this.vehicleForm.value);
    this.service.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Created Successfullll...!"); 
        this._router.navigateByUrl("/dashboard/vehicle");
      },(err:any)=>{
        alert("Internal Server Error!"); 
      }
    )
  }else{
    console.log(this.vehicleForm.value);
  this.service.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
    alert("New Vehicle Created Successfully! ");
    this._router.navigateByUrl("/dashboard/vehicle");
  },(err:any)=>{
    alert("Internal Server Error");
  }
  ) 
  
  }
}
}
