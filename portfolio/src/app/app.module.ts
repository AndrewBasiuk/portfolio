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
import {ChatModule} from './chat/chat.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { SummaryComponent } from './summary/summary.component';
import { NavComponent } from './summary/components/nav/nav.component';
import { ContentComponent } from './summary/components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    NavComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    PortfolioModule,
    ChatModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'fcc-book-trading'),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: WINDOW, useFactory: windowProvider },
    { provide: DOCUMENT, useFactory: documentProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
