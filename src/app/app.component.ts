import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4sae8';

  f(n:string){
    console.log("test "+n);
  }

  clickMe(n:string){
    //traitement à faire quand l'event btnclicked est emis par le fils
  alert("je suis le parent "+n);
  }
}
