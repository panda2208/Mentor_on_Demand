import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Completecourse } from './completecourse.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CompletecourseService{
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient){}

  private userUrl = 'http://localhost:8328/trainings/';
  

  public getUsers() {
    return this.http.get<Completecourse[]>(this.userUrl+"findTrainingByUserId/"+this.id);
  }

  




}