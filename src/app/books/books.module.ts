import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DoctorBookingComponent } from './doctor-booking/doctor-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComformComponent } from './comform/comform.component';


@NgModule({
  declarations: [
    DoctorBookingComponent,
    ComformComponent,
  
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
