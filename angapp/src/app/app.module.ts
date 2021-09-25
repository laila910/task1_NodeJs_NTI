import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

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
    SingleproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
