import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { ListeReservationComponent } from './components/liste-reservation/liste-reservation.component';
import { UpReservationComponent } from './components/up-reservation/up-reservation.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
const routes: Routes = [
  {path:'Location', component:ListeReservationComponent},
  {path:'add', component:AddReservationComponent},
  {path:'modif', component:UpReservationComponent},
  {path:'Location/modif/:id', component:UpReservationComponent},
  {path:'', component:AcceuilComponent},


];

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
