import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '../../../document';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fixedHeader = false;

  @HostListener('window:scroll', ['$event']) onScrollEvent(event){
    const siteHead = this.document.querySelector('.head');
    (event.currentTarget.pageYOffset > siteHead.clientHeight) ? this.fixedHeader = true : this.fixedHeader = false;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {}

}
