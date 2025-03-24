import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  id:number=0;
  vehicle:any='';
  constructor(private _activatedRoute:ActivatedRoute, private _service:VehicleService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert("Internal Server Error..!")
      }
    )
    _service.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
      },(err:any)=>{
        alert("Internal Server Error..!")
      }
    )
  }


}
