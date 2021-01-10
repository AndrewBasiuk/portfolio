import {Component, Input} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {LANGS} from './lang.config';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent {

  @Input() revertColor?: boolean | null;
  @Input() animation = false;
  @Input() align: string = 'ver' || 'hor';

  langs = LANGS;

  constructor(
    private translocoService: TranslocoService
  ) {}

  changeLang() {
    this.translocoService.setActiveLang('ua');
    console.log(this.translocoService.getActiveLang());
  }
}
