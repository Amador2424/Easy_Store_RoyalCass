import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { UpReservationComponent } from './components/up-reservation/up-reservation.component';
import { ListeReservationComponent } from './components/liste-reservation/liste-reservation.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddReservationComponent,
    UpReservationComponent,
    ListeReservationComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
