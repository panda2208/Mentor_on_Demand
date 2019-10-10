import { Component, OnInit } from '@angular/core';
import { Payment } from './admin.model';
import { Currentcourse } from '../currentcourse/currentcourse.model';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

	payments: Payment[];
	training: Currentcourse=new Currentcourse();
	showId=false;
	amt=0;
	Pamt;
	Pid=0;
	Remark="0 of 4";
	commission;
	displayId=false;
	constructor(private router: Router,private paymentService: AdminService)
	{
		
	}

	ngOnInit(){
	
		this.paymentService.getPayment()
		.subscribe(data=>{
			this.payments=data;
		});

	}
	toggle()
	{
		this.displayId=!this.displayId;
	}


	getMentor(Paid,x,id)
	{
		this.amt=x;
		this.Pid=id;
		this.paymentService.getMentor(Paid)
		.subscribe(data2=>{
			this.training=data2;
		})
		this.showId=!this.showId;
	
	}

	setAmount(progress,commision)

	{
		if(this.amt==0)
		{
			alert("User has not Paid fees")
		}
		else
		{
	
			this.amt=(this.amt-(this.amt*(commision/100)));
			this.amt=(this.amt/4);
			if(progress<=25 && progress>0)
			{
				this.amt=this.amt;
				this.Remark="1 of 4";
				alert("First Payment Done");
			}
			else if(progress<=50 && progress>25)
			{
				this.amt=this.amt;
				this.Remark="2 of 4";
				alert("Second Payment Done");
			}
			else if(progress<=75 && progress>50)
			{
				this.amt=this.amt;
				this.Remark="3 of 4";
				alert("Third Payment Done");
			}
			else if(progress<=100 && progress>75)
			{
				this.amt=this.amt;
				this.Remark="4 of 4";
				alert("Full Payment Done");
			}

			this.paymentService.setAmount(this.amt,this.Remark,this.Pid)
			.subscribe(data1=>{

			});
		
		}


	}

	setCommission(commission,Tid)
	{
		this.paymentService.setCommision(commission,Tid)
		.subscribe(data=>{
			alert("Commission amount Changed")
		});
  }

  logout()
  {
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('username')
    this.router.navigate(['home']);
  }
}
