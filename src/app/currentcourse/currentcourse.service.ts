import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Currentcourse } from './currentcourse.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CurrentcourseService{
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient){}

  private userUrl = 'http://localhost:8328/trainings/';
  

  public getUsers() {
    return this.http.get<Currentcourse[]>(this.userUrl+"findTrainingByUserId/"+this.id);
  }

  




}