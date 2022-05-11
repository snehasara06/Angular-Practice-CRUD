import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import{MatToolbarModule} from '@angular/material/toolbar';
// import{MatIconModule} from '@angular/material/icon';
// import {MaterialExampleModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
    // MatToolbarModule,
    // MatIconModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
