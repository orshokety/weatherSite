import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home" , component: HomeComponent },
  { path: "favorites" , component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
