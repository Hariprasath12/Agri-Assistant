import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
// import {ValidateService} from './servies/validate.service';
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


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},


   {path:'user',
   children:[{
     path:'register',
     component:userRegisterComponent
   },
   {path:'login',
    component: userLoginComponent
  },{path:'dashboard',
    component: userDashboardComponent,
    canActivate:[AuthGuard]
  }


   ]},
    {path:'agri',
   children:[{
     path:'register',
     component:agriRegisterComponent
   },
   {path:'login',
    component: agriLoginComponent
  },{path:'dashboard',
    component: agriDashboardComponent,
    canActivate:[AuthGuard]
  }


   ]},
     {path:'log',
   children:[{
     path:'register',
     component:logRegisterComponent
   },
   {path:'login',
    component: logLoginComponent
  },{path:'dashboard',
    component: logDashboardComponent,
    canActivate:[AuthGuard]
  }


   ]},
   {path:'ret',
   children:[{
     path:'register',
     component:retRegisterComponent
   },
   {path:'login',
    component: retLoginComponent
  }, {path:'dashboard',
    component: retDashboardComponent,
    canActivate:[AuthGuard]
  }


   ]},
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
    agriRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    RouterModule.forRoot(appRoutes),
     FlashMessagesModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
