import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ScholarshipComponent } from './scholarship/scholarship.component';

@NgModule({
  declarations: [ScholarshipComponent],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule
  ]
})
export class ScholarshipsModule { }
