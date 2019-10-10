import { Component } from '@angular/core';

import {Signin} from './signin.model';
import {Router} from '@angular/router';
import {SigninService} from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent   {

 
	signin : Signin=new Signin();

	constructor(private router: Router, private signinService: SigninService)
	{

	}


	authenticate(username,password): void{


		this.signinService.authenticate(username,password).subscribe(data=> {
			if(data==null)
			{
				alert("incorrect credentials");
			}
			else if(data!=null)
			{
        sessionStorage.setItem('role',data.role)
        sessionStorage.setItem('id',data.id)
				sessionStorage.setItem('username',data.userName)
        this.router.navigate(['user']);
        
			}
		})


	};
}