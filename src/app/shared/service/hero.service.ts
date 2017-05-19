import {Injectable} from '@angular/core';
import {Hero} from '../model/hero.model';
import {promise} from "selenium-webdriver";
/**
 * Created by kitri06 on 2017-05-18.
 */
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Injectable()
export class HeroService {
  // 히어로 데이터를 받아온다.
  getHeroes(): Hero[] {
    return HEROES;
  }
//  getHero(id : number) : Promise<Hero> {
  // ID를 파라미터로 받아 Hero를 리턴하라
  getHero(id: number): Hero {
    // 배열의 find()는 함수를 전달인자로 함수를 던지면 함수의 전달인자(hero)에 배열(HEROES)의 각각의 값을 넣어서
    // 함수 내부의 return 이 true가 되면 넘겨준다.
    // HEROES.find(function (hero) {
    //   return hero.id === id;
    // })

    // function 키워드를 없애고 파리미터와 본문 사이에 => 를 넣는다.
    // =>를 만나면 {}와 return를 생략할 수 있음.
    // console.log('id : ', id);
    return HEROES.find((hero) =>  hero.id === id);
  }
}
