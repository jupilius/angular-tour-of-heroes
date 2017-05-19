import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './shared/service/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  // 컴포넌트 설정
  declarations:
  [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  // 모듈 설정
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule   // 외부에서 Router 모듈을 가져온다.
  ],
  providers: [HeroService],  // 서비스 설정
  bootstrap: [AppComponent]
})
export class AppModule { }

