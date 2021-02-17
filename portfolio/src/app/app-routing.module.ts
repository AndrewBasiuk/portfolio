import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/live-chat',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'live-chat',
    component: ChatComponent,
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
