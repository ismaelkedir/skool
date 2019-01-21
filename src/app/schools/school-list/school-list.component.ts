import { Component, OnInit, Input } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.sass']
})
export class SchoolListComponent implements OnInit {


  constructor(private _schoolService: SchoolService) { }

  @Input() schools;

  ngOnInit() {
    
  }

}
