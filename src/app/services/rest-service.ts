import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export abstract class RestService<T> {

    baseUrl: string = 'http://localhost:5000';

    constructor(protected _http: HttpClient, protected endPoint: string) {

    }
    
    // Fetch all records
    getAll(): Observable<T[]> {
        return this._http.get(this.baseUrl + this.endPoint) as Observable<T[]>;
    }

    // Fetches one element
    getOne(id: string): Observable<T> {
        return this._http.get(`${this.baseUrl}${this.endPoint}/${id}`) as Observable<T>;
    }
}