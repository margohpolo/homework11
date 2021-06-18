import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { BusinessComponent } from './business/business.component';
import { AiComponent } from './ai/ai.component';


@NgModule({
  declarations: [
    BusinessComponent,
    AiComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
