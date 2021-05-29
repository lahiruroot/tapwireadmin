import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './hedder/navbar/navbar.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'map',component:MapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
