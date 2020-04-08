import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PORTFOLIO_ROUTS } from './portfolio/portfolio-routing';


const routes: Routes = [
  PORTFOLIO_ROUTS,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
