import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {Signup} from './signup.model';
import {SignupService} from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:Signup=new Signup();
  active=true;
	date= new Date();
	users=Math.random();
  constructor(private router:Router, private signupService:SignupService) {

  }

  createUser():void{
    this.user.resetPasswordDate=this.date;
		this.user.active=this.active;
    this.user.regCode=this.user.firstName+this.user.id;
    this.signupService.createUser(this.user)
    .subscribe(data=> {
      alert("User created successfully");
    });
  };


}

