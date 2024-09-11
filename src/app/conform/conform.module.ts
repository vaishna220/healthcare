import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConformRoutingModule } from './conform-routing.module';
import { ConformationComponent } from './conformation/conformation.component';


@NgModule({
  declarations: [
    ConformationComponent
  ],
  imports: [
    CommonModule,
    ConformRoutingModule
  ]
})
export class ConformModule { }
