import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../core/models/apartment';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
myForm : FormGroup;
appartment : Apartment = new Apartment();
addApartment(){
//this.appartment=this.myForm.value;
this.appartment.appartNum=this.appartNum.value;
this.appartment.floorNum=this.fNum.value;
this.appartment.surface=this.surface.value;
console.log(this.appartment);
  
}
ngOnInit(){
  this.myForm=new FormGroup({
    sousgroupe:new FormGroup({
    apartNum:new FormControl('valeur par défaut', [Validators.required]),
    surface:new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]*")]),
    floorNum:new FormControl()}),
    surfaceTerrace: new FormControl()
    
  })
  console.log(this.myForm);
}

//retourner l'objet formControl apartNum
get appartNum(){
  return this.myForm.get('sousgroupe').get('apartNum');
}

get fNum(){
  return this.myForm.get('sousgroupe').get('floorNum');
}
get surface(){
  return this.myForm.get('sousgroupe').get('surface');
}
get surfaceTerrace(){
  return this.myForm.get('surfaceTerrace');
}
get sousgroupe(){
  return this.myForm.get('sousgroupe');
}
}
