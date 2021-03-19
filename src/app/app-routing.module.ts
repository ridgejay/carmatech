import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'gallery', component:ListingsComponent},
  {path: 'tour', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
