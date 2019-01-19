import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  // This array of schools will be sent to the child component (School-List)
  schools: any = [];

  constructor(private _schoolService: SchoolService) { }

  ngOnInit() {
    const searchBox = document.getElementById('search-box');

    /**
     * Add a type-ahead search functionality
     * With a debounceTime to prevent exessive calls to the api
     */
    fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => e.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter((query: string) => query.length > 0),
      switchMap((query: string) => this._schoolService.search(query))
    ).subscribe(result => {
      this.schools = result;

      M.toast({html: `${this.schools.length} schools found.`})
    }, error => console.error(error))

  }
}
