import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  // 생성자에서 서비스에 데이터를 주입(Injection)한다.
  constructor(private heroService: HeroService) { }

  // Init 이벤트에서 서비스의 데이터를 heroes에 입력한다.
  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes().slice(1, 5);
  }

}
