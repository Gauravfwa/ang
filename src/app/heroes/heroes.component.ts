import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Gaurav',
  //   course:'bca'
  // };
  // user = {
  //   type: 'Admin',
  //   password: 'dh@hjhfgh$hjg6'
  // };
  heroes=HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
