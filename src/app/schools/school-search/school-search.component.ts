import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, switchMap, tap, finalize } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.sass']
})
export class SchoolSearchComponent implements OnInit {

  /** Variable that controls if the loading spinner should be shown or not
   *  Default is false
   * */
  loading: boolean = false;
  // This array of schools will be sent to the child component (School-List) as an Input
  schools: any = [];


  constructor(
    private _schoolService: SchoolService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  /**
   * Changes the URL param without changing the route
   * @param newParam The param value
   */
  changeUrlParam(newParam) {
    const queryParams: Params = { search: newParam };

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: "merge"
      })
  }


  /**
   * Displays the number of schools found in a materialize-css toast message
   * @param schools Array of schools
   */
  toastNumOfSchools(schools) {
    M.toast({ html: `${schools.length} school${schools.length > 1 || schools.length == 0 ? 's' : ''} found.` })
  }


  /**
   * Add a type-ahead search functionality
   * Calls the api endpoint everytime a user types in the searchbar
   * with a debounceTime to prevent exessive calls to the api
   */
  startSearching(searchBox) {
    let searchBoxValue = searchBox.getAttribute('value');

    // If the searchBox has already got text inside...
    if (searchBoxValue) {
      this._schoolService.search(searchBoxValue).subscribe(result => {
        this.schools = result;

        this.toastNumOfSchools(this.schools);
      });
    }

    fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value), // Map the value entered on every keyboard typing event
      debounceTime(500), // Add a 500 ms debounceTime before starting the search for every keystroke
      tap(() => this.loading = true), // When the event is triggered, show the loading spinner
      distinctUntilChanged(), // Leave the results unchaged if the keyinput is for eg: pressing backspace
      filter((query: string) => query.trim().length > 0 && query.trim() != ''), // Start search only if the query is not empty
      switchMap((query: string) => this._schoolService.search(query) // Call the service
        .pipe(
          finalize(() => {
            // Hide the loading spinner
            this.loading = false;

            // Change the value of '?search=' in the URL
            this.changeUrlParam(query);
          })
        ))
    ).subscribe(result => {
      // When we recieve a successful result...
      this.schools = result;

      // Show a toast message showing the no. of schools found
      this.toastNumOfSchools(this.schools);
    }, error => console.error(error));
  }


  ngOnInit() {
    let searchParam: string = this.activatedRoute.snapshot.queryParamMap.get('search');
    const searchBox = document.getElementById('search-box');

    // If the search query is provided with the url parameter as '?search=' ... 
    if (searchParam) {
      searchBox.setAttribute('value', searchParam);
      this.startSearching(searchBox);
    } else {
      // If the search query is not provided with the url parameter..
      // Just continue with the type-ahead searching
      this.startSearching(searchBox);
    }

  }

  findNearBy() {
    M.toast({ html: 'Finding your location' });

    // Get the client location after permission is granted
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude + ',' + pos.coords.longitude);

      M.toast({ html: 'Location found' });

      const queryParams = {
        coordinate: `${pos.coords.latitude},${pos.coords.longitude}`
      }

      // Redirect to the nearby schools page
      this.router.navigate(['near'], { queryParams: queryParams })
    }, error => {
      console.log(error);

      if (error.PERMISSION_DENIED && error.code === 1) {
        M.toast({
          html: '<i class="material-icons left">info</i>Please allow access to location',
          displayLength: 10000
        })
      } else if (error.POSITION_UNAVAILABLE && error.code === 2) {
        M.toast({
          html: '<i class="material-icons left">info</i>Error while finding your location',
          displayLength: 10000
        })
      }
    });
  }
}
