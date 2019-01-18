import { Component, OnInit, Input } from '@angular/core';
import { School } from '../models/school';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.sass']
})
export class SchoolListComponent implements OnInit {


  constructor(private _schoolService: SchoolService) { }

  @Input() schools;
  schoolsCount: number = 0;

  ngOnInit() {
    
  }

}
