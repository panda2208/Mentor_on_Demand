import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signin } from './signin.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class SigninService{

  constructor(private http:HttpClient){}

  private MentorUrl = 'http://localhost:8328/users/';
  


  public authenticate(username,password)
  {
    return this.http.get<Signin>(this.MentorUrl+username+"/"+password);
  }



}