import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  
public countSub:BehaviorSubject<number>=new BehaviorSubject(0);


  constructor() { }
}
