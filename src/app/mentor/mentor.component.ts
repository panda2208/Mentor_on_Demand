import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {Mentor} from './mentor.model';
import {MentorService} from './mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent   {
  user:Mentor=new Mentor();

  constructor(private router:Router, private mentorService:MentorService) {

  }

  createUser():void{
    this.mentorService.createUser(this.user)
    .subscribe(data=> {
      alert("User created successfully");
    });
  };

}