import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Currentcourse } from './currentcourse.model';
import { CurrentcourseService } from './currentcourse.service';

@Component({
  selector: 'app-signin',
  templateUrl: './currentcourse.component.html',
  styleUrls: ['./currentcourse.component.css']
})
export class CurrentcourseComponent implements OnInit   {
  user=sessionStorage.getItem("username");
  users: Currentcourse[];

  constructor(private router: Router, private currentcourseService: CurrentcourseService) {

  }
  ngOnInit() {
    this.currentcourseService.getUsers()
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