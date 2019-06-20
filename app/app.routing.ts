import {Routes, RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService }from './in-memory-data.service';

import { NgModule } from '@angular/core';
// import { CurrencyComponent } from "./currency/currency.component";
// import { WeatherComponent } from "./weather/weather.component";
// import { MovieComponent } from "./movie/movie.component";
import {ComplexForm} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const MAINMENU_ROUTES: Routes = [
  // {path: '', redirectTo: './weather', pathMatch: 'full'},
  // {path: 'weather', component: WeatherComponent},
  // {path: 'movie', component: MovieComponent},
  // {path: 'currency', component: CurrencyComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(MAINMENU_ROUTES)],
  exports: [RouterModule],
})
export class CONST_ROUTING{}
 // export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
