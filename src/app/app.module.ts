import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CurrentcourseComponent } from './currentcourse/currentcourse.component';
import { CompletecourseComponent } from './completecourse/completecourse.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { MentorComponent }  from './mentor/mentor.component';
import { MentormainComponent }  from './mentormain/mentormain.component';
import { MentorcurrentComponent }  from'./mentorcurrent/mentorcurrent.component';
import { MentorcompleteComponent }  from'./mentorcomplete/mentorcomplete.component';
import { MentorpaymentComponent }  from'./mentorpayment/mentorpayment.component';
import { AdminComponent }  from'./admin/admin.component';
import { AdminaddComponent }  from'./adminadd/adminadd.component';
import { AdminmentorComponent }  from'./adminmentor/adminmentor.component';
import { AdminuserComponent }  from'./adminuser/adminuser.component';
import { SignupService } from './signup/signup.service';
import { MentorService } from './mentor/mentor.service';
import { AdminuserService} from './adminuser/adminuser.service';
import { AdminmentorService} from './adminmentor/adminmentor.service';
import { SigninService} from './signin/signin.service';
import { UserService} from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MentorsigninService } from './mentorsignin/mentorsignin.service';
import { MentorsigninComponent } from './mentorsignin/mentorsignin.component';
import { AdminaddService } from './adminadd/adminadd.service';
import { CurrentcourseService } from './currentcourse/currentcourse.service';
import { CompletecourseService } from './completecourse/completecourse.service';
import { MentormainService } from './mentormain/mentormain.service';
import { SkillComponent } from './mentormain/skill.component';
import { MentorcurrentService } from './mentorcurrent/mentorcurrent.service';
import { MentorcompleteService } from './mentorcomplete/mentorcomplete.service';
import { AdminService } from './admin/admin.service';
import { MentorpaymentService } from './mentorpayment/mentorpayment.service';
import { PaymentService } from './payment/payment.service';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    HomeComponent,
    CurrentcourseComponent,
    CompletecourseComponent,
    PaymentComponent,
    PaymentdetailComponent,
    MentorComponent,
    MentormainComponent,
    MentorcurrentComponent,
    MentorcompleteComponent,
    MentorpaymentComponent,
    AdminComponent,
    AdminaddComponent,
    AdminmentorComponent,
    AdminuserComponent,
    MentorsigninComponent,
    SkillComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
    


  ],
  providers: [SignupService,MentorService,AdminuserService,AdminmentorService,SigninService,UserService,MentorsigninService,AdminaddService,CurrentcourseService,CompletecourseService,MentormainService,MentorcurrentService,MentorcompleteService,AdminService,MentorpaymentService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
