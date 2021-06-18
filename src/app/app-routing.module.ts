import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import {MapComponent } from './map/map.component';
import {UsersComponent } from './users/users.component';
import { InsightsComponent } from './insights/insights.component';
import { ArticleComponent } from './insights/article/article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import {LoginService} from './_guards/login.service';
// import { UnsavedChangesGuard } from './_guards/unsaved-changes-guard.service';

const routes: Routes = [
  {
    path:'', component: AboutComponent,
  },
  {
    path:'about', component: AboutComponent,
  },
  {
    path:'contact', component: ContactComponent,
  },
  {
    path:'angular', component: AngularComponent,
  },
  // {
  //   path:'map', component: MapComponent, canActivate:[LoginService], canDeactivate:[UnsavedChangesGuard]
  // },
  {
    path:'map', component: MapComponent,
  },
  {
    path:'users', component: UsersComponent,
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module')
      .then(m => m.ServicesModule)
  },
  {
    path: 'insights', component: InsightsComponent
  },
  // {
  //   path: 'insights/article/:articleString.id', component: ArticleComponent
  // },
  {
    path: '**', component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
