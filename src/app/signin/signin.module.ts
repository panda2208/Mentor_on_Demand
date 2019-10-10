import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [
   
    SigninComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [SigninComponent]
})
export class AppModule { }
