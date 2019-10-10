import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentorsignin } from './mentorsignin.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MentorsigninService{

  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8328/mentors/';
  


  public authenticate(username,password)
  {
    return this.http.get<Mentorsignin>(this.MentorUrl+username+"/"+password);
  }



}