import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts: any=[];
  trem:string='';


  constructor(private service:AccountService){
    service.getData().subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
      console.log(this.accounts);
    }
    ),(err:any)=>{
      alert("Internal Server Error..!")
    }
  }

  //filter 

  fliter(){
    this.accounts.getfilteredAccounts(this.trem).subscribe(
      (data:any)=>{
      console.log(data);
      this.accounts=data;
      console.log(this.accounts);
    }),(err:any)=>{
      alert("Internal Server Error..!");
    }
  }
}
