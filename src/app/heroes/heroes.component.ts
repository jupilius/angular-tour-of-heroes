import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  // 생성자에서 서비스에 데이터를 주입(Injection)한다.
  constructor(private heroService: HeroService) { }
  // Init 이벤트에서 서비스의 데이터를 heroes에 입력한다.
  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero ): void {
    this.selectedHero = hero;
    // console.log(this.selectedHero.name);
  }

}
