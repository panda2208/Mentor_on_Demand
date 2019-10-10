import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signup } from './signup.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignupService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Signup[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Signup>(this.userUrl, user);
  }

}
