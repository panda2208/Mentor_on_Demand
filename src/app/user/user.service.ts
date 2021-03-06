import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/users/';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl+this.id);
  }
  
  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);

}
}
