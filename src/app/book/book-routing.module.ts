import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';

const routes: Routes = [
  {
    path:"doctorBooking",component:DoctorBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
