import { Component } from '@angular/core';
import { LocationAPIService } from 'src/app/services/location-api.service';
import { LocationModel } from 'src/app/models/location-model.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
constructor(private API : LocationAPIService, private route : Router){}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
Location:LocationModel = {
  Nom:'',
  Prenom:'',
  Voiture:'',
  Durer:"",
  InformationBancaire:""
}
save():void{
const data={
  Nom:this.Location.Nom,
  Prenom:this.Location.Prenom,
  Voiture:this.Location.Voiture,
  Durer:this.Location.Durer,
  InformationBancaire:this.Location.InformationBancaire,
}
this.API.create(data).subscribe({
  next:()=> console.log("ajout fait"),
  error:(e)=>console.error(e),
  complete: ()=>this.route.navigate(['/Location'])
})
}

}
