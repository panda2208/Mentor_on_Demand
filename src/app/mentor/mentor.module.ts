import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MentorComponent } from './mentor.component';

@NgModule({
  declarations: [
   
    MentorComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [MentorComponent]
})
export class AppModule { }
