import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export abstract class RestService<T> {
    constructor(protected _http: HttpClient, protected actionUrl: string) {

    }
    
    // Fetch all records
    getAll(): Observable<T[]> {
        return this._http.get(this.actionUrl) as Observable<T[]>;
    }

    // Fetches one element
    getOne(id: string): Observable<T> {
        return this._http.get(`${this.actionUrl}${id}`) as Observable<T>;
    }
}