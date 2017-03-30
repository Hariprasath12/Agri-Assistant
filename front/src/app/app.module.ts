import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './servies/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './component/about/about.component';
import { agriDashboardComponent } from './component/agri/dashboard/dashboard.component';
import { agriLoginComponent } from './component/agri/login/login.component';
import { agriRegisterComponent } from './component/agri/register/register.component';
import { logDashboardComponent } from './component/log/dashboard/dashboard.component';
import { logLoginComponent } from './component/log/login/login.component';
import { logRegisterComponent } from './component/log/register/register.component';
import { retDashboardComponent } from './component/ret/dashboard/dashboard.component';
import { retLoginComponent } from './component/ret/login/login.component';
import { retRegisterComponent } from './component/ret/register/register.component';
import { userDashboardComponent } from './component/user/dashboard/dashboard.component';
import { userLoginComponent } from './component/user/login/login.component';
import { userRegisterComponent } from './component/user/register/register.component';
import { AgriprofileComponent } from './component/agri/agriprofile/agriprofile.component';
import { LoginComponent } from './component/login/login.component';
import { FileUploadModule } from 'ng2-file-upload';
import { LogprofileComponent } from './component/log/logprofile/logprofile.component';
import { RetprofileComponent } from './component/ret/retprofile/retprofile.component';
import { UserprofileComponent } from './component/user/userprofile/userprofile.component';
import { AgrichatComponent } from './component/agri/agrichat/agrichat.component';
import { AgripostComponent } from './component/agri/agripost/agripost.component';
import { AgrireviewComponent } from './component/agri/agrireview/agrireview.component';
import { AgrimainComponent } from './component/agri/agrimain/agrimain.component';
import { UserchatComponent } from './component/user/userchat/userchat.component';
import { UserreviewComponent } from './component/user/userreview/userreview.component';
import { UserproductComponent } from './component/user/userproduct/userproduct.component';
import { UserpaymentComponent } from './component/user/userpayment/userpayment.component';
import { UserpostsComponent } from './component/user/userposts/userposts.component';
import { UsercropdiaryComponent } from './component/user/usercropdiary/usercropdiary.component';
import { UsermainComponent } from './component/user/usermain/usermain.component';
import { RetmainComponent } from './component/ret/retmain/retmain.component';
import { RetproductComponent } from './component/ret/retproduct/retproduct.component';
import { RetpaymentComponent } from './component/ret/retpayment/retpayment.component';
import { RethistoryComponent } from './component/ret/rethistory/rethistory.component';
import { RettrackComponent } from './component/ret/rettrack/rettrack.component';
import { RetreviewComponent } from './component/ret/retreview/retreview.component';
import { LogpaymentComponent } from './component/log/logpayment/logpayment.component';
import { LogupdateComponent } from './component/log/logupdate/logupdate.component';
import { LogtrackComponent } from './component/log/logtrack/logtrack.component';
import { LogmainComponent } from './component/log/logmain/logmain.component';

import { AddpostComponent } from './component/agri/agripost/addpost/addpost.component';
import { PaymenthisComponent } from './component/user/userpayment/paymenthis/paymenthis.component';
import { PaymenttempComponent } from './component/user/userpayment/paymenttemp/paymenttemp.component';
import { UsereditprofileComponent } from './component/user/userprofile/usereditprofile/usereditprofile.component';
import { UsercropsComponent } from './component/user/userprofile/usercrops/usercrops.component';
import { AddcropComponent } from './component/user/addcrop/addcrop.component';
import { SortbydatePipe } from './pipes/sortbydate.pipe';
import { WhetherComponent } from './component/user/whether/whether.component';
import { UsernotifyComponent } from './component/user/usernotify/usernotify.component';
import { CroplistComponent } from './component/user/croplist/croplist.component';
import { AgrieditprofileComponent } from './component/agri/agrieditprofile/agrieditprofile.component';
import { AgripostlistComponent } from './component/agri/agripostlist/agripostlist.component';
import { AgrinotifyComponent } from './component/agri/agrinotify/agrinotify.component';
import { LogeditprofileComponent } from './component/log/logeditprofile/logeditprofile.component';
import { AddlocationComponent } from './component/log/addlocation/addlocation.component';
import { UpdatepriceComponent } from './component/log/updateprice/updateprice.component';
import { LognotifyComponent } from './component/log/lognotify/lognotify.component';
import { LogpaymenthisComponent } from './component/log/logpaymenthis/logpaymenthis.component';
import { LogaddpaymentComponent } from './component/log/logaddpayment/logaddpayment.component';
import { LocationlistComponent } from './component/log/locationlist/locationlist.component';
import { TrakpaymentupdateComponent } from './component/log/trakpaymentupdate/trakpaymentupdate.component';
import { TrackviewComponent } from './component/log/trackview/trackview.component';
import { UpdatetrackComponent } from './component/log/updatetrack/updatetrack.component';



const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
{path:'login', component: LoginComponent },


   {
     path:'user',
   
   children:[
   {
     path:'register',
     component:userRegisterComponent
   },
   {
     path:'login',
    component: userLoginComponent
  },
  {
    path:'dashboard',
    component: userDashboardComponent,
    canActivate:[AuthGuard],

   
    children:[
    {
path:'',
    component: UsermainComponent
    },{
      path:'profile',
    component: UserprofileComponent
    },{
      path:'chat',
    component:UserchatComponent 
    },{
      path:'product',
    component: UserproductComponent
    },{
      path:'payment',
    component: UserpaymentComponent
    },{
      path:'posts',
    component: UserpostsComponent
    },{
      path:'review',
    component: UserreviewComponent
    },{
      path:'cropdiary',
    component: UsercropdiaryComponent
    }

    ]
  }


   ]
 },
    {
      path:'agri',
 
   children:[{
     path:'register',
     component:agriRegisterComponent
   },
   {path:'login',
    component: agriLoginComponent
  },{

    path:'dashboard',
    component: agriDashboardComponent,
    canActivate:[AuthGuard],
children:[
{

path:'',
   component: AgrimainComponent
},
{

path:'profile',
   component: AgriprofileComponent
},
{
path:'chat',
   component: AgrichatComponent
},
{
path:'post',
component: AgripostComponent
},
{
path:'review',
   component: AgrireviewComponent
}
]
}
]
},
 {
 path:'log',

   children:
   [
   {
     path:'register',
     component:logRegisterComponent
   },

   {
     path:'login',
    component: logLoginComponent
  },
  {
    path:'dashboard',
    component: logDashboardComponent,
    canActivate:[AuthGuard],
children:
   [
   
   {
path:'',
    component: LogmainComponent
   },   {
path:'profile',
    component: LogprofileComponent
   },
      {
path:'payment',
    component: LogpaymentComponent
   },   {
path:'update',
    component: LogupdateComponent
   },   {
path:'track',
    component: LogtrackComponent
   }
   ]

  }
]
},
   {
     path:'ret',

   children:[{
     path:'register',
     component:retRegisterComponent
   },
   {
     path:'login',
    component: retLoginComponent
  }, {
    path:'dashboard',
    component: retDashboardComponent,
    canActivate:[AuthGuard],


 children:[
 {
path:'',
    component: RetmainComponent
 },
 {
 path:'profile',
    component: RetprofileComponent
 },
 {
   path:'product',
    component:RetproductComponent

 },{
   path:'payment',
    component: RetpaymentComponent
  },{
    path:'history',
    component: RethistoryComponent
  },
  {path:'track',
    component: RettrackComponent
  }, {path:'review',
    component: RetreviewComponent
  }
]
}
]}
,
{path:'about', component: AboutComponent},

 
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    HomeComponent,
    
    AboutComponent,
  
    userDashboardComponent,
    userLoginComponent,
    userRegisterComponent,
    logDashboardComponent,
    logLoginComponent,
    logRegisterComponent,
    retDashboardComponent,
    retLoginComponent,
    retRegisterComponent,
    agriDashboardComponent,
    agriLoginComponent,
    agriRegisterComponent,
    AgriprofileComponent,
    LoginComponent,
    
    LogprofileComponent,
    RetprofileComponent,
    UserprofileComponent,
    AgrichatComponent,
    AgripostComponent,
    AgrireviewComponent,
    AgrimainComponent,
    UserchatComponent,
    UserreviewComponent,
    UserproductComponent,
    UserpaymentComponent,
    UserpostsComponent,
    UsercropdiaryComponent,
    UsermainComponent,
    RetmainComponent,
    RetproductComponent,
    RetpaymentComponent,
    RethistoryComponent,
    RettrackComponent,
    RetreviewComponent,
    LogpaymentComponent,
    LogupdateComponent,
    LogtrackComponent,
    LogmainComponent,
    AddpostComponent,
    PaymenthisComponent,
    PaymenttempComponent,
    UsereditprofileComponent,
    UsercropsComponent,
    AddcropComponent,
    SortbydatePipe,
    WhetherComponent,
    UsernotifyComponent,
    CroplistComponent,
    AgrieditprofileComponent,
    AgripostlistComponent,
    AgrinotifyComponent,
    LogeditprofileComponent,
    AddlocationComponent,
    UpdatepriceComponent,
    LognotifyComponent,
    LogpaymenthisComponent,
    LogaddpaymentComponent,
    LocationlistComponent,
    TrakpaymentupdateComponent,
    TrackviewComponent,
    UpdatetrackComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
   
    RouterModule.forRoot(appRoutes),
     FlashMessagesModule
   

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
