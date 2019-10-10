import { Component, OnInit } from '@angular/core';
import { Currentcourse } from '../currentcourse/currentcourse.model';
import { Router } from '@angular/router';
import { MentorcompleteService } from './mentorcomplete.service';

@Component({
  selector: 'app-mentorcomplete',
  templateUrl: './mentorcomplete.component.html',
  styleUrls: ['./mentorcomplete.component.css']
})
export class MentorcompleteComponent implements OnInit    {
  mentor=sessionStorage.getItem("username");
  mentors:Currentcourse[];

  constructor(private router:Router, private mentorcompleteService: MentorcompleteService){
    
  }
  ngOnInit() {
    this.mentorcompleteService.getMentors()
    .subscribe(data => {
      this.mentors=data;
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