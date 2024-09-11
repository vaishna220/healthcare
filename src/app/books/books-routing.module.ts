import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';
import { ComformComponent } from './comform/comform.component';


const routes: Routes = [
  {path:"doctorBooking",component:DoctorBookingComponent},
  {path:"comform",component:ComformComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
