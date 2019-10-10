import { Component, OnInit } from '@angular/core';
import { Payment } from '../admin/admin.model';
import { Currentcourse } from '../currentcourse/currentcourse.model';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {


	user=sessionStorage.getItem("username");
	payments: Payment[];
	training: Currentcourse=new Currentcourse();
	showId=false;
	Payid;
	amt;
	
	constructor(private router: Router,private paymentService: PaymentService)
	{
		
	}

	ngOnInit(){
		

		this.paymentService.getPayment()
		.subscribe(data1=>{
			this.payments=data1;
		});


	}


	getTrainings(Pid,amount,payid)
	{
		this.Payid=payid;
		this.amt=amount;
		
		this.paymentService.getTrainings(payid)
		.subscribe(data=>{
			this.training=data;
		});
		this.showId=!this.showId;
		
	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.paymentService.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Successfully Paid!");
		});

		}
		else{
			alert("already paid");
		}


		

	}

	logout()
	{
	  sessionStorage.removeItem('role')
	  sessionStorage.removeItem('id')
	  sessionStorage.removeItem('username')
	  this.router.navigate(['home']);
	}
	
}

