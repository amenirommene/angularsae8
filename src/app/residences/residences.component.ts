import { ApartmentService } from './../sheared/apartment.service';
import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

constructor(private apartS:ApartmentService){}

ngOnInit(){
  //this.listResidences=this.apartS.getResidences();
  this.apartS.getAllResidences().subscribe(res=>this.listResidences=res);
  this.listApartments=this.apartS.getApartments();
}
  setName(val:string){
    this.name=val;
  }
  name : string = "val initial";
  name2 : string = "";
  listResidences:Residence[]=[];
  listApartments:Apartment[]=[];


  residenceFavoris : Residence[] = [];

      getApartments(id:number){
        for (let a of this.listApartments){
           console.log(a);
        }
      }
      addToFavoris(r:Residence){
       this.residenceFavoris.push(r);
       console.log(this.residenceFavoris);
      }
    }
