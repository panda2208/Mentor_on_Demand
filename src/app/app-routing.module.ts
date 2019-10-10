import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CurrentcourseComponent } from './currentcourse/currentcourse.component';
import { CompletecourseComponent } from './completecourse/completecourse.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { MentorsigninComponent } from './mentorsignin/mentorsignin.component';
import { MentorComponent }  from'./mentor/mentor.component';
import { MentormainComponent }  from'./mentormain/mentormain.component';
import { MentorcurrentComponent }  from'./mentorcurrent/mentorcurrent.component';
import { MentorcompleteComponent }  from'./mentorcomplete/mentorcomplete.component';
import { MentorpaymentComponent }  from'./mentorpayment/mentorpayment.component';
import { AdminComponent }  from'./admin/admin.component';
import { AdminaddComponent }  from'./adminadd/adminadd.component';
import { AdminmentorComponent }  from'./adminmentor/adminmentor.component';
import { AdminuserComponent }  from'./adminuser/adminuser.component';
import { SkillComponent } from './mentormain/skill.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home',pathMatch:'full'
  },
  {
    path: 'signin', component:SigninComponent},
    {
      path: 'signup', component:SignupComponent},
      {
        path: 'user', component:UserComponent},
        {
          path: 'home', component:HomeComponent},
          {
            path: 'currentcourse', component:CurrentcourseComponent},
            {
              path: 'completecourse', component:CompletecourseComponent},
              {
                path: 'payment', component:PaymentComponent},
                {
                  path: 'paymentdetail', component:PaymentdetailComponent},
                  {
                    path: 'mentor', component:MentorComponent},
                    {
                      path: 'mentormain', component:MentormainComponent},
                      {
                        path: 'mentorcurrent', component:MentorcurrentComponent},
                        {
                          path: 'mentorcomplete', component:MentorcompleteComponent},
                          {
                            path: 'mentorpayment', component:MentorpaymentComponent},
                            {
                              path: 'admin', component:AdminComponent},
                              {
                                path: 'adminadd', component:AdminaddComponent},
                                {
                                  path: 'adminmentor', component:AdminmentorComponent},
                                  {
                                    path: 'adminuser', component:AdminuserComponent},
                                    {
                                      path: 'mentorsignin', component:MentorsigninComponent},
                                      {
                                        path: 'skill', component:SkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
