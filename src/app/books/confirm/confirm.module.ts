import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConformationComponent } from './conformation/conformation.component';


@NgModule({
  declarations: [
    ConformationComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule
  ]
})
export class ConfirmModule { }
