import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

import {PortfolioService} from './portfolio.service';
import { MainComponent } from './pages/main/main.component';
import { SocialComponent } from './components/social/social.component';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { LangComponent } from './components/lang/lang.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import {TranslocoModule} from '@ngneat/transloco';

const COMPONENTS = [
  PortfolioComponent,
  MainComponent,
  SocialComponent,
  NavigationComponent,
  HeaderComponent,
  LangComponent,
  AboutComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    WorksComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        TranslocoModule
    ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }

