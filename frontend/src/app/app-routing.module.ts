import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { TabelleComponent } from './tabelle/tabelle.component';

const routes: Routes = [{
    path: "",
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "tabelle",
    component: TabelleComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
