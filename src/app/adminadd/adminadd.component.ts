import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminaddService } from './adminadd.service';
import { Adminadd } from './adminadd.model';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit  {
  techs:Adminadd[];
  tech:Adminadd=new Adminadd();
  showId=false;

  constructor(private router: Router, private techService: AdminaddService) {

  }

  ngOnInit() {
    this.techService.getTechs()
      .subscribe( data => {
        this.techs = data;
      });
  };

  deleteTech(tech: Adminadd): void {
    this.techService.deleteTech(tech)
      .subscribe( data => {
        this.techs = this.techs.filter(u => u !== tech);
      });
    };

      createTech(): void {
        this.techService.createTech(this.tech)
            .subscribe( data => {
              alert("technology created successfully.");
            });
    
  };
  toggleId()
  {
      this.showId=!this.showId;
  }

  logout()
  {
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('username')
    this.router.navigate(['home']);
  }

}
