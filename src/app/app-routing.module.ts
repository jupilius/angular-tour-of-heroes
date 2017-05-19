/**
 * Created by kitri06 on 2017-05-19.
 */

import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  // 리다이렉트 기능(꼭 pathMatch: 'full' 를 작성하여야 한다.
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // detail/ID로 URL를 통해 요청이 들어오면 HeroDetailComponent로 ID 값을 넘겨주세요
  { path: 'detail/:id', component: HeroDetailComponent }
];
@NgModule({
  // 라우터 설정(여러개를 할 수 있음)
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {


}
