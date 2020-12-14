import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '../../../document';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fixedHeader = false;
  mobile$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 575px)']).pipe(
    map((state: BreakpointState) => state.matches)
  );
  tablet$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 768px)']).pipe(
    map((state: BreakpointState) => state.matches)
  );

  @HostListener('window:scroll', ['$event']) onScrollEvent(event){
    const siteHead = this.document.querySelector('.head');
    (event.currentTarget.pageYOffset > siteHead.clientHeight) ? this.fixedHeader = true : this.fixedHeader = false;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {}

}
