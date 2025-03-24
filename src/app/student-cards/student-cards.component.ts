import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent {
student:any=[];
Student: any;

constructor( private _studentService:StudentService ){
  _studentService.getStudent().subscribe(
    (data:any)=>{
      console.log(data);
      this.student=data;
      console.log(this.student);

    },(err:any)=>{
      alert("Internal Server Error..!");
    }
  )
}

}
