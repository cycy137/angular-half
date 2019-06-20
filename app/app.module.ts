import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ComplexForm } from './app.component';
import {MenuComponent} from './menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import { HttpModule } from '@angular/http';
import {CONST_ROUTING} from './app.routing';
import { SharedService } from './shared.service';
import { InMemoryDataService } from './in-memory-data.service';
import {HeroService} from './hero.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {MessagesService} from './messages.service';
@NgModule({
  declarations: [
    ComplexForm,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    HttpModule,
    CONST_ROUTING,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [SharedService],
  bootstrap: [ComplexForm]
})
export class AppModule { }
