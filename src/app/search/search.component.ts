import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  // The search query
  searchTerm: String = '';

  constructor() { }

  ngOnInit() {
  }

  // Method to run when the user starts to type in the search bar
  startSearch(){
    console.log(this.searchTerm);
  }

}
