import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  //les composants liés à ce module
  declarations: [
    AppComponent,
    TestComponent,
    ResidencesComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    NotFoundComponent
  ],
  //la liste des modules dont le(s) composant(s) a besoin
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //utile pour pouvoir utiliser ngModel
  ],
  //les services à utiliser
  providers: [],
  //le composant à appeler dans le fichier index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
