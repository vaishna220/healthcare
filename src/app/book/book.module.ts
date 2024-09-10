import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';


@NgModule({
  declarations: [
    DoctorBookingComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
