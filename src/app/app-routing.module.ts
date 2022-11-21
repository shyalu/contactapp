import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'contacts/add',
    component:AddcontactComponent
  },
  {
    path:'contacts/edit/:id',
    component:EditcontactComponent
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '**',
    redirectTo:'pagenotfound',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
