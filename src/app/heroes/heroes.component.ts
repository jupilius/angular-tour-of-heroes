import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  // 생성자에서 서비스에 데이터를 주입(Injection)한다.
  constructor(private heroService: HeroService,
              private router: Router) { }
  // Init 이벤트에서 서비스의 데이터를 heroes에 입력한다.
  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero ): void {
    this.selectedHero = hero;
    // console.log(this.selectedHero.name);
  }

  gotoDetail(): void {
    // 라우터를 사용하는 방법 2번째 : 네비게이터를 사용한다. Router Class를 사용
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
