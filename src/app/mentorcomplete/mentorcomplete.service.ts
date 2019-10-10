import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currentcourse } from '../currentcourse/currentcourse.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorcompleteService {
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8328/trainings/';
  //private userUrl = '/api';

  public getMentors() {
    return this.http.get<Currentcourse[]>(this.userUrl+"findTrainingByMentorId/"+this.id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

 

}
