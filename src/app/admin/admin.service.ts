import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currentcourse } from '../currentcourse/currentcourse.model';
import { Payment } from './admin.model';



const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AdminService{

  constructor(private http:HttpClient){}

  private adminUrl = 'http://localhost:8328/trainings/';
  private payUrl = 'http://localhost:8328/payments/';

  


  public getMentor(Paid) {
    return this.http.get<Currentcourse>(this.adminUrl+Paid);
  }
  public getPayment() {
    return this.http.get<Payment[]>(this.payUrl);
  }
 
  public setAmount(amount,Remark,Pid)
  {
    return this.http.get<Payment>(this.payUrl+amount+"/"+Remark+"/"+Pid)
  }
  
  public setCommision(commission,Tid){
    return this.http.get<Currentcourse>(this.adminUrl+"/ChangeCommision/"+commission+"/"+Tid);
  }


}