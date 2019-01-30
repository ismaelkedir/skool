import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDetailComponent } from '../schools/school-detail/school-detail.component';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { SchoolNearbyComponent } from './school-nearby/school-nearby.component';

const routes: Routes = [
  {
    path: 'schools',
    children: [
      { path: '', component: SchoolSearchComponent },
      { path: ':id', component: SchoolDetailComponent },
    ]
  },
  {
    path: 'near',
    component: SchoolNearbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
