import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor, Skill } from './mentormain.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentormainService {
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/mentors/';
  private skillUrl= 'http://localhost:8328/skills/'
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Mentor[]>(this.userUrl+this.id);
  }

  public getSkill()
  {
    return this.http.get<Skill[]>(this.skillUrl+"findByMentorId/"+this.id);
  }
  
  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Skill>(this.skillUrl, user);

}
}
