import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Completecourse } from './completecourse.model';
import { CompletecourseService } from './completecourse.service';

@Component({
  selector: 'app-completecourse',
  templateUrl: './completecourse.component.html',
  styleUrls: ['./completecourse.component.css']
})
export class CompletecourseComponent implements OnInit  {
  user=sessionStorage.getItem("username");
  users: Completecourse[];

  constructor(private router: Router, private completecourseService: CompletecourseService) {

  }
  ngOnInit() {
    this.completecourseService.getUsers()
      .subscribe( data => {
        this.users = data;
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