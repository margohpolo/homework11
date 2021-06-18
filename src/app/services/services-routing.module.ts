import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component: BusinessComponent},
  {path: 'business', component: BusinessComponent},
  {path:'ai', component: AiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
