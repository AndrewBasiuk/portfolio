import {Component, Input, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {LANGS} from './lang.config';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  @Input() revertColor?: boolean | null;
  @Input() animation = false;
  @Input() align: string = 'ver' || 'hor';

  langList = LANGS;
  animationClass = ['lang-list__item_1', 'lang-list__item_2'];
  activeLang$ = this.translocoService.langChanges$;

  constructor(
    private translocoService: TranslocoService,
    private location: Location,
    private router: Router
  ) {
  }

  changeLang(nextLang: string, activeLang: string): void {
    const defaultLang = this.translocoService.getDefaultLang();
    const url = this.location.path();

    if (nextLang !== activeLang) {

      setTimeout(() => {
        (nextLang === defaultLang) ?
          this.router.navigateByUrl(url.replace(`/${activeLang}`, '')) :
          this.router.navigateByUrl(`/${nextLang}${url}`);
      });

      this.translocoService.setActiveLang(nextLang);
    }
  }

  setActiveLangAccordingToUrl(): void {
    const path = this.location.path().split('/');

    this.langList.forEach((lang) => {
      (path[1] === lang.name) ? this.translocoService.setActiveLang(lang.name) : this.translocoService.setActiveLang('en');
    });
  }

  ngOnInit() {
    this.setActiveLangAccordingToUrl();
  }
}
