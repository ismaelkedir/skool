import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SchoolService } from '../school.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.sass']
})
export class SchoolDetailComponent implements OnInit {

  school: Object;

  constructor(private router: ActivatedRoute, private _schoolService: SchoolService) {

   }

   
   ngOnInit() {
    M.Tabs.init(document.querySelector('.tabs'));

    //  Get the school id from the param passed in the URL
    this.router.params.subscribe(params => {
      let id = params['id'];
      // Call the service that gets the school with the specified id
      this._schoolService.getOne(id).subscribe(school => {
        // Assign the fetched school to the school object
        this.school = school;
      })
    })
  }

}
