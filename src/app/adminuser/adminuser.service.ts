import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Adminuser } from './adminuser.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminuserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Adminuser[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Adminuser>(this.userUrl, user);

}
}
