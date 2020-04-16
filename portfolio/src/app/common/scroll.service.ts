import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollTop: any = 0;

  constructor() { }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event){
    this.scrollTop = event.currentTarget;
  }

  getScrollTopValue() {
    return this.scrollTop;
  }
}
