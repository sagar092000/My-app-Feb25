import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehivles',
  templateUrl: './vehivles.component.html',
  styleUrls: ['./vehivles.component.css']
})
export class VehivlesComponent {

  vehicles:any=[]
  term:string='';
constructor(private service:VehicleService){
  service.getVechile().subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log(this.vehicles);
  },(err:any)=>{
    alert("Internal service error..!");
  })
}
//filter  

filter(){
  this.service.getfilteredVehicles(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;

    },(err:any)=>{
    alert("Internal server error...!");
  }
  )
}
column:string='';
order:string='';
  //sort
sort(){
  this.service.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error..!");
 
    }
  )
}

//load the vechile

loadVehicles(){
this.service.getData().subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log(this.vehicles);
  },(err:any)=>{
    alert("Internal server Error");
  }
)
}
//delete


delete(id:any){
  if(confirm("Are yosure to deleted?")==true){
  this.service.deleteVehicle(id).subscribe(
   (data:any)=>{
    console.log(data);
    this.service=data;
    alert("Record Deleted Succssfully!")
  },
  (err:any)=>{
    alert("Internal server error...!");
  })
}else{
  alert("You have Cancelled!");}
}


limit:any='';
page:any='';
pagination(){
  this.service.getPaginatedVhicles(this.limit,this.page).subscribe(

    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error..!")
    }
  )
}


}