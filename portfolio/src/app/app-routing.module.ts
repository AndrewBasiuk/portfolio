import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {ChatComponent} from './chat/chat.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
  {
    path: ':lang/portfolio',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
