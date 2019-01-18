import { Injectable } from '@angular/core';
import { RestService } from './abstract/rest-service';
import { School } from '../models/school';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends RestService<School>{

  constructor(http:HttpClient) {
    super(http, 'http://localhost:5000/schools');
  }

  search(query){
    return this._http.get(`http://localhost:5000/schools/search/${query}`);
  }
}
