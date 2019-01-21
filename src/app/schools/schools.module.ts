import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolSearchComponent } from './school-search/school-search.component';

@NgModule({
  declarations: [
    SchoolListComponent,
    SchoolDetailComponent,
    SchoolSearchComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
  ]
})
export class SchoolsModule { }
