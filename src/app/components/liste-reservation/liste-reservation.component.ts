import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location-model.model'; 
import { LocationAPIService } from 'src/app/services/location-api.service'; 
import { NgForOf } from '@angular/common'; // import de la directive NgForOf

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  Location: LocationModel[] | undefined;
  constructor(private LocationAPI: LocationAPIService){}

  ngOnInit():void{
    this.retrieveLocation();
  }

  retrieveLocation(){
    this.LocationAPI.getAll().subscribe({
      next: (data)=> this.Location=(data),
      error:(e)=> console.error(e),
      complete: ()=> console.log('get all done')
    })
  }
}
