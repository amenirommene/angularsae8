import { TestComponent } from './test/test.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4sae8';
  @ViewChild(TestComponent) monfils: TestComponent;

ngAfterViewInit(){
  console.log(this.monfils.prop1);
}
  f(n:string){
    console.log("test "+n);
    //console.log(this.monfils.prop1);
  }

  clickMe(n:string){
    //traitement à faire quand l'event btnclicked est emis par le fils
  alert("je suis le parent "+n);
  }
}
