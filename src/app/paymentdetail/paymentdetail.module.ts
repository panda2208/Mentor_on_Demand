import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { PaymentdetailComponent } from './paymentdetail.component';

@NgModule({
  declarations: [
   
    PaymentdetailComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [PaymentdetailComponent]
})
export class AppModule { }
