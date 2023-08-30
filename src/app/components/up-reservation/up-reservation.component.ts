import { Component, OnInit } from '@angular/core';
import { LocationAPIService } from 'src/app/services/location-api.service';
import { LocationModel } from 'src/app/models/location-model.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-up-reservation',
  templateUrl: './up-reservation.component.html',
  styleUrls: ['./up-reservation.component.css']
})
export class UpReservationComponent implements OnInit {
  constructor(private API: LocationAPIService, private route :ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.SelectOne();

    }


  Location:LocationModel = {
    Nom:'',
    Prenom:'',
    Voiture:'',
    Durer:"",
    InformationBancaire:""
  }
  SelectOne(){
   
    
    this.API.ReadOne( this.route.snapshot.paramMap.get('id')).subscribe({
      next: (data)=> this.Location=(data),
      error:(e)=> console.error(e),
      complete:() => console.log(this.Location._id)
      
    })
  }
  up():void{
    const data={
      Nom:this.Location.Nom,
      Prenom:this.Location.Prenom,
      Voiture:this.Location.Voiture,
      Durer:this.Location.Durer,
      InformationBancaire:this.Location.InformationBancaire,
    }
    this.API.put(data, this.route.snapshot.paramMap.get('id')).subscribe({
      next: (data)=> this.Location=(data),
      error:(e)=> console.error(e),
    complete: ()=>this.router.navigate(['/Location'])
    })
    }
    annuler(){

  this.router.navigate(['/Location'])

}
del(){

  const data={
    Nom:this.Location.Nom,
    Prenom:this.Location.Prenom,
    Voiture:this.Location.Voiture,
    Durer:this.Location.Durer,
    InformationBancaire:this.Location.InformationBancaire,
  }

  this.API.delete_func(data,this.route.snapshot.paramMap.get('id')).subscribe({
    next: (data)=> this.Location=(data),

    error:(e)=> console.error(e),
    complete:() => this.router.navigate(['/Location'])
  })

}
}
