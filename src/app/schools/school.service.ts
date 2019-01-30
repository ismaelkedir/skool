import { Injectable } from '@angular/core';
import { RestService } from '../services/rest-service';
import { School } from '../models/school';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SchoolService extends RestService<School>{

  constructor(http: HttpClient) {
    // Inherit the parent methods for the /schools endpoint
    super(http, '/schools');
  }

  /**
   * Calls the api endpoint that searches for schools with the provided @param term
   * @param term The Search query that will be inserted to the url endpoint
   */
  search(term) {
    return this._http.get(`${this.baseUrl}${this.endPoint}/search?q=${term}`);
  }

  nearby(coordinate){
    return this._http.get(`${this.baseUrl}${this.endPoint}/near?coordinate=${coordinate}`)
  }
}
