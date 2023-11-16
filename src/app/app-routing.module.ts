import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';

const routes: Routes = [
  //localhost:4200
  {path:'', redirectTo:"home", pathMatch:"full" },
  //localhost:4200/home
  {path:'home', component:ResidencesComponent},
  //localhost:4200/add
  {path:'add', component:FormResidenceComponent},
  //route paramétré
  //localhost:4200/details/...
  {path:'details/:id', component:ApartmentsComponent},
  //"**" doit être toujours la dernière route
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
