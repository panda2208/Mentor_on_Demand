import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AdminmentorComponent } from './adminmentor.component';

@NgModule({
  declarations: [
   
    AdminmentorComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AdminmentorComponent]
})
export class AppModule { }
