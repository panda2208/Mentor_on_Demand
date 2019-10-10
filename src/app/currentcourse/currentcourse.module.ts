import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { CurrentcourseComponent } from './currentcourse.component';

@NgModule({
  declarations: [
   
    CurrentcourseComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [CurrentcourseComponent]
})
export class AppModule { }
