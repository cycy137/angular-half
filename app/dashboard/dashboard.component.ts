import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.components.css' ]
})
export class DashboardComponent implements OnInit{
  heros: Hero[];
  constructor(private heroService: HeroService){}
  ngOnInit() {
    this.getHeros();
  }
  getHeros(): void{
      this.heroService.getHeroes()
        .subscribe(heros => this.heros = heros.slice(1, 5) );
  }
}
