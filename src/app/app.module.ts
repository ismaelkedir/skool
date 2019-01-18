import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SchoolService } from './services/school.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SchoolListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
