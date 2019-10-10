import { Component, OnInit } from '@angular/core';
import { Router} from'@angular/router';
import { Adminuser } from './adminuser.model';
import { AdminuserService } from './adminuser.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit  {

  users:Adminuser[];
  constructor(private router: Router, private adminuserService: AdminuserService){

}
ngOnInit(){
  this.adminuserService.getUsers()
  .subscribe(data=> {
    this.users =data;
  });
};
deleteUser(user: Adminuser): void {
  this.adminuserService.deleteUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
    })
};

logout()
{
  sessionStorage.removeItem('role')
  sessionStorage.removeItem('id')
  sessionStorage.removeItem('username')
  this.router.navigate(['home']);
}

}