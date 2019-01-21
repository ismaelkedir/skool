import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, switchMap, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.sass']
})
export class SchoolSearchComponent implements OnInit {

  loading: boolean = false;
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
      debounceTime(500),
      tap(() => this.loading = true),
      distinctUntilChanged(),
      filter((query: string) => query.length > 0),
      switchMap((query: string) => this._schoolService.search(query)
        .pipe(
          finalize(() => this.loading = false)
        ))
    ).subscribe(result => {
      this.schools = result;

      M.toast({ html: `${this.schools.length} schools found.` })
    }, error => console.error(error))

  }
}
