import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { Adminmentor } from'./adminmentor.model';
import { AdminmentorService } from './adminmentor.service';

@Component({
  selector: 'app-adminmentor',
  templateUrl: './adminmentor.component.html',
  styleUrls: ['./adminmentor.component.css']
})
export class AdminmentorComponent implements OnInit  {

  users:Adminmentor[];
  constructor(private router: Router, private adminmentorService: AdminmentorService){

}
ngOnInit(){
  this.adminmentorService.getUsers()
  .subscribe(data=> {
    this.users =data;
  });
};
deleteUser(user: Adminmentor): void {
  this.adminmentorService.deleteUser(user)
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
