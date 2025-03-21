import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CricleComponent } from './cricle/cricle.component';
import { BmiComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CelFaComponent } from './cel-fa/cel-fa.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AccountsComponent } from './accounts/accounts.component';
import { VehivlesComponent } from './vehivles/vehivles.component';
import { FlipkartApiComponent } from './flipkart-api/flipkart-api.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'calcultor',component:CalcultorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'cricle',component:CricleComponent},
    {path:'body-mass-weight',component:BmiComponent},
    {path:'home',component:HomeComponent},
    {path:'sigin',component:SiginComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'cel-fa',component:CelFaComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'vechiles',component:VehivlesComponent},
    {path:'flipkart-api',component:FlipkartApiComponent},
    {path:'create-vechicle',component:CreateVechicleComponent},
    {path:'student-card',component:StudentCardsComponent},
    {path:'create-user',component:CreateUserComponent}
  
  ]},// parent routing
  
  {path:'',component:LoginComponent}, // default routing
  {path:'login',component:LoginComponent},
  {path:'**',component:Error404Component} //wild-card routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
