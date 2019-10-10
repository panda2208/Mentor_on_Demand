import { Component } from '@angular/core';
import { Mentor } from './mentor.model';
import { Router } from '@angular/router';
import { MentorService } from './mentor.service';

@Component({
  
  templateUrl: './skill.component.html',
  styleUrls: ['./mentor.component.css']
})
export class SkillComponent   {
  skill: Mentor = new Mentor();

  constructor(private router: Router, private skillService: MentorService) {

  }

  createUser(): void {
    this.skillService.createUser(this.skill)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
