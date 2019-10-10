import { Component, OnInit } from '@angular/core';
import { Payment } from '../admin/admin.model';
import { Router } from '@angular/router';
import { MentorpaymentService } from './mentorpayment.service';

@Component({
  selector: 'app-mentorpayment',
  templateUrl: './mentorpayment.component.html',
  styleUrls: ['./mentorpayment.component.css']
})
export class MentorpaymentComponent implements OnInit {

	mentor=sessionStorage.getItem("username");
	payments: Payment[];
	showId=false;
	withdrawAmount;
	amount;
	pid;

	constructor(private router: Router,private mentorpaymentService: MentorpaymentService)
	{

	}

	ngOnInit(){
		

		this.mentorpaymentService.getPayment()
		.subscribe(data1=>{
			this.payments=data1;
		});
	}

	toggle(amount,pid){
		this.amount=amount;
		this.pid=pid;
		this.showId=!this.showId;
		
	}

	Withdraw(amt){
		if(amt>this.amount)
		{
			alert("insufficient funds");
		}
		else
		{
			this.mentorpaymentService.Withdraw(this.pid,amt)
			.subscribe(data=>{
			alert("Withdraw Successfull");
			});
		
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

	