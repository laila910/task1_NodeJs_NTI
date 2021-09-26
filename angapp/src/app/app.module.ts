import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleserviceComponent } from './pages/singleservice/singleservice.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './shared/contact/contact.component';
import { RolesComponent } from './task/roles/roles.component';
import { ProvidersComponent } from './task/providers/providers.component';
import { SingleproviderComponent } from './task/singleprovider/singleprovider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    HomeComponent,
    SingleserviceComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    ContactComponent,
    RolesComponent,
    ProvidersComponent,
    SingleproviderComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    // CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
