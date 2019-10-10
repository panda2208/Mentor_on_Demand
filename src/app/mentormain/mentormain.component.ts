import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from './mentormain.model';
import { MentormainService} from './mentormain.service';

@Component({
  selector: 'app-mentormain',
  templateUrl: './mentormain.component.html',
  styleUrls: ['./mentormain.component.css']
})
export class MentormainComponent   {
  mentor=sessionStorage.getItem("username");
  mentors:Mentor[];
  constructor(private router: Router, private mentorService: MentormainService){

  }
  ngOnInit(){
    this.mentorService.getUsers()
    .subscribe(data=> {
      this.mentors =data;
    });
  };
  deleteUser(user: Mentor): void {
    this.mentorService.deleteUser(user)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== user);
      })
  };

  createUser(): void {
    this.mentorService.createUser(this.mentors)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

  logout()
  {
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('username')
    this.router.navigate(['home']);
  }
}