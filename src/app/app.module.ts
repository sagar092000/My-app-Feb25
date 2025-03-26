import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CricleComponent } from './cricle/cricle.component';
import { BmiComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelFaComponent } from './cel-fa/cel-fa.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';

import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { VehivlesComponent } from './vehivles/vehivles.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [			
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    CalcultorComponent,
    RectangleComponent,
    CricleComponent,
    BmiComponent,
    HomeComponent,
    SiginComponent,
    DataBindingComponent,
    CelFaComponent,
    DirectivesComponent,
    EmployeeComponent,
   
    AccountsComponent,
    VehivlesComponent,
    FlipkartApiComponent,
    CreateVechicleComponent,
    StudentCardsComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
   
    Sibling1Component,
    Sibling2Component,
      ParentComponent,
      ChildComponent,
      RatingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
