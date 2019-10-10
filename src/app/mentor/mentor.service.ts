import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from './mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/mentors';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Mentor[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Mentor>(this.userUrl, user);
  }

}
