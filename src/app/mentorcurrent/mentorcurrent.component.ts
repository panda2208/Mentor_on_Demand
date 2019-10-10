import { Component, OnInit } from '@angular/core';
import { Currentcourse } from '../currentcourse/currentcourse.model';
import { Router } from '@angular/router';
import { MentorcurrentService } from './mentorcurrent.service';

@Component({
  selector: 'app-mentorcurrent',
  templateUrl: './mentorcurrent.component.html',
  styleUrls: ['./mentorcurrent.component.css']
})
export class MentorcurrentComponent implements OnInit  {
  mentor=sessionStorage.getItem("username");
  mentors: Currentcourse[];

  constructor(private router: Router, private currentcourseService: MentorcurrentService) {

  }
  ngOnInit() {
    this.currentcourseService.getMentors()
      .subscribe( data => {
        this.mentors = data;
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