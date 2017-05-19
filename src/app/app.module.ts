import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './shared/service/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: // 컴포넌트 설정
    [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: // 모듈 설정
    [
    BrowserModule,
    FormsModule,
    HttpModule,
      // 라우터 설정(여러개를 할 수 있음)
    RouterModule.forRoot(
    [
      { // 리다이렉트 기능(꼭 pathMatch: 'full' 를 작성하여야 한다.
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      { // detail/ID로 URL를 통해 요청이 들어오면 HeroDetailComponent로 ID 값을 넘겨주세요
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])
  ],
  providers: [HeroService],  // 서비스 설정
  bootstrap: [AppComponent]
})
export class AppModule { }

