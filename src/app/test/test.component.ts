import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  //proprité interne
  prop1: string="from fils";
  //la valeur de prop2 sera envoyé par le composant parent
  //propriété d'entrée
  @Input() prop2:string="";

  @Output() btnclicked = new EventEmitter<string>();

  sendNotif(){

    this.btnclicked.emit("failded");
  }
}
