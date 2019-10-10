import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../admin/admin.model';
import { Currentcourse } from '../currentcourse/currentcourse.model';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {
  id=sessionStorage.getItem("id")
  constructor(private http:HttpClient) {}

  private payUrl = 'http://localhost:8328/payments/';
  private trainingUrl='http://localhost:8328/trainings/';
  //private userUrl = '/api';

  public getPayment()
  {
    return this.http.get<Payment[]>(this.payUrl+"/findbyuser/"+this.id);
  }

 
  
  public getTrainings(Pid)
  {
    return this.http.get<Currentcourse>(this.trainingUrl+Pid);
  }
  
  public Payfees(payid,amount)
  {
    return this.http.get<Payment>(this.payUrl+"payfees/"+payid+"/"+amount)
  }

}

