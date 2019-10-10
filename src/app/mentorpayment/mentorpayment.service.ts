import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../admin/admin.model';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorpaymentService {
  id=sessionStorage.getItem("id")
  constructor(private http:HttpClient) {}

  private payUrl = 'http://localhost:8328/payments/';
  private trainingUrl='http://localhost:8328/trainings/';
  //private userUrl = '/api';

  public getPayment()
  {
    return this.http.get<Payment[]>(this.payUrl+"/findbymentor/"+this.id);
  }

 
  
  public Withdraw(payid,amount)
  {
    return this.http.get<Payment>(this.payUrl+"withdraw/"+payid+"/"+amount)
  }


}

