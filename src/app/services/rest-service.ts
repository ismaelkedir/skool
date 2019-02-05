import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export abstract class RestService<T> {

    baseUrl: string = 'http://localhost:5000';

    constructor(protected _http: HttpClient, protected endPoint: string) {

    }
    
    // Fetches all records
    getAll(): Observable<T[]> {
        return this._http.get(this.baseUrl + this.endPoint) as Observable<T[]>;
    }

    // Fetches one record
    getOne(id: string): Observable<T> {
        return this._http.get(`${this.baseUrl}${this.endPoint}/${id}`) as Observable<T>;
    }

    // Deletes one record
    delete(id: string): Observable<T> {
        return this._http.delete(`${this.baseUrl}${this.endPoint}/${id}`) as Observable<T>;
    }
}