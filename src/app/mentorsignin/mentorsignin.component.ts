import { Component } from '@angular/core';

import {Mentorsignin} from './mentorsignin.model';
import {Router} from '@angular/router';
import {MentorsigninService} from './mentorsignin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './mentorsignin.component.html',
  styleUrls: ['./mentorsignin.component.css']
})
export class MentorsigninComponent   {

 
	signin : Mentorsignin=new Mentorsignin();

	constructor(private router: Router, private signinService: MentorsigninService)
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
        this.router.navigate(['mentormain']);
        
			}
		})


	};
}