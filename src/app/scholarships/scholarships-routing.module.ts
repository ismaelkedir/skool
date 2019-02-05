import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScholarshipComponent } from './scholarship/scholarship.component';

const routes: Routes = [
  {
    path: 'scholarships',
    children: [
      {path: '', component: ScholarshipComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScholarshipsRoutingModule { }
