import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Adminadd } from './adminadd.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminaddService {

  constructor(private http:HttpClient) {}

  private techUrl = 'http://localhost:8328/technology';
  //private techUrl = '/api';

  public getTechs() {
    return this.http.get<Adminadd[]>(this.techUrl);
  }

  public deleteTech(tech) {
    return this.http.delete(this.techUrl + "/"+ tech.id);
  }

  public createTech(tech) {
    return this.http.post<Adminadd>(this.techUrl, tech);

}
}
