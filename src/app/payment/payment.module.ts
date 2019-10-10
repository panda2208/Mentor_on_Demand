import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [
   
    PaymentComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [PaymentComponent]
})
export class AppModule { }
