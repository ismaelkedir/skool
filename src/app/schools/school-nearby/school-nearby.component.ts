import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-nearby',
  templateUrl: './school-nearby.component.html',
  styleUrls: ['./school-nearby.component.sass']
})
export class SchoolNearbyComponent implements OnInit {

  loading: boolean = false;
  nearbySchools: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _schoolService: SchoolService
  ) { }

  ngOnInit() {
    // Get the lat and lng from the URL query 
    let coordinate = this.activatedRoute.snapshot.queryParamMap.get('coordinate');

    // Show the loading spinner
    this.loading = true;

    // Call the api endpoint that calculates nearby schools by passing in the geo coordinate
    if (coordinate) {
      this._schoolService.nearby(coordinate).subscribe(result => {
        this.loading = false;
        this.nearbySchools = result;
      });
    }
  }

}
