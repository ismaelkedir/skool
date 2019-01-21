import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SchoolService } from '../school.service';

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
    this.router.params.subscribe(params => {
      let id = params['id'];
      this._schoolService.getOne(id).subscribe(school => {
        this.school = school;
      })
    })
  }

}
