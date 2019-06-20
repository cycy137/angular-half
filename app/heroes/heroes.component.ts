import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from './mock-heros';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  // selec: Hero;
  constructor(private heroService: HeroService) { }
  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(callbackfromgetHero => this.heros = callbackfromgetHero);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heros.push(hero));
  }
  ngOnInit() {
    this.getHeros();
  }

}
