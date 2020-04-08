import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

import {PortfolioService} from './portfolio.service';
import { MainComponent } from './pages/main/main.component';

const COMPONENTS = [
  PortfolioComponent,
  MainComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }

