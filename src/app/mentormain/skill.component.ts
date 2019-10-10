import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MentormainService } from './mentormain.service';
import { Mentor, Skill } from './mentormain.model';


@Component({
  
  templateUrl: './skill.component.html',
  styleUrls: ['./mentormain.component.css']
})
export class SkillComponent   {
  skill: Skill = new Skill();
  mentor=sessionStorage.getItem("username");
  mentors:Mentor[];
  skills: Skill[];
  showId=false;
  id=sessionStorage.getItem('id');
  constructor(private router: Router, private skillService: MentormainService) {

  }
  ngOnInit(){
    this.skillService.getUsers()
    .subscribe(data=> {
      this.mentors =data;
    });

    this.skillService.getSkill()
    .subscribe(data=> {
      this.skills =data;
    });

  };

  createUser(): void {
    this.skill.mentorId=this.id;
    this.skillService.createUser(this.skill)
        .subscribe( data => {
          alert("Skill created successfully.");
        });

  };

  toggleId() {
		this.showId = !this.showId;
	  }

}
