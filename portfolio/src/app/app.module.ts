import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioModule } from './portfolio/portfolio.module';
import {windowProvider, WINDOW} from './window';
import {DOCUMENT, documentProvider} from './document';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PortfolioModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    { provide: WINDOW, useFactory: windowProvider },
    { provide: DOCUMENT, useFactory: documentProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
