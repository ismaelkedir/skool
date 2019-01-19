import { Injectable } from '@angular/core';
import { RestService } from './abstract/rest-service';
import { School } from '../models/school';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends RestService<School>{

  constructor(http: HttpClient) {
    // Inherit the parent methods for the /schools endpoint
    super(http, '/schools');
  }

  search(term) {
    return this._http.get(`${this.baseUrl}${this.endPoint}/search/${term}`);
  }
}
