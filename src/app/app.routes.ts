import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'users', component: UserListComponent }
];