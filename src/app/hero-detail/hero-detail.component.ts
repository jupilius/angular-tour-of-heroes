import {Component, OnInit} from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero; // 외부로 부터 할당이 된다. 컴포넌트 간의 정보전달
  hero: Hero;
  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location
  ) {}

  ngOnInit(): void {




    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);

    // function 키워드를 없애고 파리미터와 본문 사이에 => 를 넣는다.
    // =>를 만나면 {}와 return를 생략할 수 있음.
    // Observable는 subscribe()로 받는다.
    //  this.route.params.subscribe(
    //    function (p: Params) {
    //     this.id = p['id'];
    //  }
    //  );
    // 다시 살펴보자
    this.route.params.subscribe(
      (p: Params) => this.hero = this.heroService.getHero(+p['id'])
    );
  }

  goBack(): void {
    this.location.back();
  }

}
