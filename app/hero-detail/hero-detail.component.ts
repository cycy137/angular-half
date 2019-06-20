import {Hero} from '../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector : 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location ) {}
  ngOnInit() {
    this.getHero();

  }
  getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id'); // +is a js funciton translate string to number

  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}
  goback(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe( () => this.goback());
  }
}

