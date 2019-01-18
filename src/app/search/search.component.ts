import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  // The search query
  searchTerm: String = '';

  // This array of schools will be sent to the child component (School-List)
  schools: any = [];
  schoolsCount: number = 0;

  constructor(private _schoolService: SchoolService) { }

  ngOnInit() {
  }

  // Method to run when the user starts to type in the search bar
  startSearch() {
    
    // If the search bar is not empty...
    if (this.searchTerm != '') {
      // Call the api endpoint that searches for a record with a 
      // schoolname containing the searchTerm
      this._schoolService.search(this.searchTerm)
        .subscribe(result => {
          M.toast({ html: `${result.length} schools found.`, classes: 'rounded' });
          this.schools = result;
        }, error =>
            // If an error occurs
            console.error(error)
        );
    } else {
      // If the search bar is empty, then empty the school-list
      this.schools = [];
    }
  }
}
