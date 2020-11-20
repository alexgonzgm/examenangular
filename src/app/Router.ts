import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriecomponentComponent } from './seriecomponent/seriecomponent.component';

const routes: Routes = [
  {path :"serie/:idSerie" , component : SeriecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
