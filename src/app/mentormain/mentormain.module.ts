import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MentormainComponent } from './mentormain.component';

@NgModule({
  declarations: [
   
    MentormainComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [MentormainComponent]
})
export class AppModule { }
