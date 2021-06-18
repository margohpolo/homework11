import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { InsightsComponent } from './insights/insights.component';
import { ArticleComponent } from './insights/article/article.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { LoginComponent } from './login/login.component';

// import { UnsavedChangesGuard } from './_guards/unsaved-changes-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MapComponent,
    ContactComponent,
    AngularComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    UsersComponent,
    InsightsComponent,
    ArticleComponent,
    PagenotfoundComponent
    // LoginComponent,

  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
